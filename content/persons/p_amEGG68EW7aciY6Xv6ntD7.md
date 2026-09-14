---
schema: wang-person/v1
id: p_amEGG68EW7aciY6Xv6ntD7
status: active
merged_into: null
display_name: 王海
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CNLDUe5bceYTmxG31j4K9g
        subject_person_id: p_amEGG68EW7aciY6Xv6ntD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V3NaQtqFZV4KJWpdUGp6t8
          claim_id: c_CNLDUe5bceYTmxG31j4K9g
          source_id: s_8JAiy4UaFDzw9KFSV7o58W
          stance: supports
          locator: CBDB:265518
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265518）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VQn9GTF35DqwgkKedqyxgR
        subject_person_id: p_amEGG68EW7aciY6Xv6ntD7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海，明人物。弘治六年進士，籍贯永清。（中国历代人物传记资料库 CBDB 265518）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cQ062O4Wl8ChMuxvEqw50-
          claim_id: c_VQn9GTF35DqwgkKedqyxgR
          source_id: s_8JAiy4UaFDzw9KFSV7o58W
          stance: supports
          locator: CBDB:265518
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_CwNoR4RewoHTE9KBp57Caf
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_BeXawCGklFJtuEher9DyV3
        subject_person_id: p_amEGG68EW7aciY6Xv6ntD7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1BuHLbs4u37iTGFQUybyJM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xGwkbIuPSLH2FLQqbeKVsy
          claim_id: c_BeXawCGklFJtuEher9DyV3
          source_id: s_UgbikxsDgEuEls0ot-poVH
          stance: supports
          locator: CBDB：兄弟 王雄（68045）之父／母 王海
          quotation: null
          interpretation_note: 由兄弟关系推断：王宣 与 王雄 为同胞（CBDB 记「弟」），王雄 之父／母即 王宣 之父／母。
          source:
            id: s_UgbikxsDgEuEls0ot-poVH
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 265522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265522&o=json
            external_identifier: CBDB:265522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1BuHLbs4u37iTGFQUybyJM
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_f_Q8bJzTw6rJqDWPk8uUkj
        subject_person_id: p_amEGG68EW7aciY6Xv6ntD7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FRKaNC4sdNU7bptj3K9pfx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pVmjzYWRfilhZLEejThSsP
          claim_id: c_f_Q8bJzTw6rJqDWPk8uUkj
          source_id: s_Sb3dmY6sWV4KdILoUAG5_-
          stance: supports
          locator: CBDB：兄弟 王雄（68045）之父／母 王海
          quotation: null
          interpretation_note: 由兄弟关系推断：王琪 与 王雄 为同胞（CBDB 记「兄」），王雄 之父／母即 王琪 之父／母。
          source:
            id: s_Sb3dmY6sWV4KdILoUAG5_-
            source_type: api_record
            title: 中国历代人物传记资料库：王琪（CBDB 265523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265523&o=json
            external_identifier: CBDB:265523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FRKaNC4sdNU7bptj3K9pfx
        status: active
        display_name: 王琪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王海 | accepted |
| bio.summary | 王海，明人物。弘治六年進士，籍贯永清。（中国历代人物传记资料库 CBDB 265518） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CwNoR4RewoHTE9KBp57Caf | 王雄 | accepted |
| children | p_1BuHLbs4u37iTGFQUybyJM | 王宣 | accepted |
| children | p_FRKaNC4sdNU7bptj3K9pfx | 王琪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海（CBDB 265518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265518&o=json)
- [中国历代人物传记资料库：王琪（CBDB 265523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265523&o=json)
- [中国历代人物传记资料库：王宣（CBDB 265522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265522&o=json)
