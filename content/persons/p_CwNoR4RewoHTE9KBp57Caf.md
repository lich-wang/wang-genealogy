---
schema: wang-person/v1
id: p_CwNoR4RewoHTE9KBp57Caf
status: active
merged_into: null
display_name: 王雄
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L1hsKaq8roYcPY1f73Eej6
        subject_person_id: p_CwNoR4RewoHTE9KBp57Caf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ze6HCjvQLLs7mNvYi8KxBv
          claim_id: c_L1hsKaq8roYcPY1f73Eej6
          source_id: s_wqSB3mMZLobJ8EMkTTKu3h
          stance: supports
          locator: CBDB:68045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68045）
          source: &a1
            id: s_wqSB3mMZLobJ8EMkTTKu3h
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 68045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68045&o=json
            external_identifier: CBDB:68045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N49QyMTzrW4mhGkf9eKZsA
        subject_person_id: p_CwNoR4RewoHTE9KBp57Caf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄，明人物。明清進士進士，籍贯永清，入仕進士，曾任縣丞、行人司行人。（中国历代人物传记资料库 CBDB 68045）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1UFwUqI6ZpP0oZDc4dScQk
          claim_id: c_N49QyMTzrW4mhGkf9eKZsA
          source_id: s_wqSB3mMZLobJ8EMkTTKu3h
          stance: supports
          locator: CBDB:68045
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f1W-muRhe0zdF4pCT3enUm
        subject_person_id: p_amEGG68EW7aciY6Xv6ntD7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CwNoR4RewoHTE9KBp57Caf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KBYZ4wcXaBunKYkcMN3nkd
          claim_id: c_f1W-muRhe0zdF4pCT3enUm
          source_id: s_8JAiy4UaFDzw9KFSV7o58W
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8JAiy4UaFDzw9KFSV7o58W
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 265518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265518&o=json
            external_identifier: CBDB:265518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_amEGG68EW7aciY6Xv6ntD7
        status: active
        display_name: 王海
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HthVf3FBYX-NsHQMD6L1d9
        subject_person_id: p_2JgtDvUaZn6Y3f1G7JFvwL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CwNoR4RewoHTE9KBp57Caf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnYoyhYnlrHru34YQiC4op
          claim_id: c_HthVf3FBYX-NsHQMD6L1d9
          source_id: s_7Z9Tei3o3yPR21A66r4zHC
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Z9Tei3o3yPR21A66r4zHC
            source_type: api_record
            title: 中国历代人物传记资料库：王四（CBDB 265516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265516&o=json
            external_identifier: CBDB:265516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2JgtDvUaZn6Y3f1G7JFvwL
        status: active
        display_name: 王四
        merged_into_person_id: null
    - claim:
        id: c_M9mQVL1iyMSI0uSk7cVwaK
        subject_person_id: p_GBscMGKGohhpwZdDCFX33F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CwNoR4RewoHTE9KBp57Caf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDBTngVXdAZu3aOf0Qe5wR
          claim_id: c_M9mQVL1iyMSI0uSk7cVwaK
          source_id: s_tkU9kSXyor5bTJ22XPQQHB
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tkU9kSXyor5bTJ22XPQQHB
            source_type: api_record
            title: 中国历代人物传记资料库：王文質（CBDB 265517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265517&o=json
            external_identifier: CBDB:265517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.684Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GBscMGKGohhpwZdDCFX33F
        status: active
        display_name: 王文質
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| bio.summary | 王雄，明人物。明清進士進士，籍贯永清，入仕進士，曾任縣丞、行人司行人。（中国历代人物传记资料库 CBDB 68045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_amEGG68EW7aciY6Xv6ntD7 | 王海 | accepted |
| ancestors | p_2JgtDvUaZn6Y3f1G7JFvwL | 王四 | accepted |
| ancestors | p_GBscMGKGohhpwZdDCFX33F | 王文質 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海（CBDB 265518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265518&o=json)
- [中国历代人物传记资料库：王四（CBDB 265516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265516&o=json)
- [中国历代人物传记资料库：王文質（CBDB 265517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265517&o=json)
- [中国历代人物传记资料库：王雄（CBDB 68045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68045&o=json)
