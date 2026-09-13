---
schema: wang-person/v1
id: p_aEsLhzJM2J5736Dvki9e9Z
status: active
merged_into: null
display_name: 王蓂
cbdb_id: 126783
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xQ3rPkun1TxDUr28D2NHcw
        subject_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓂，史料所见人物。本项目依据《中国历代人物传记资料库：王蓂（CBDB 126783）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_E8y_5HQ-BnzOJ1JjtJOdz9
          claim_id: c_xQ3rPkun1TxDUr28D2NHcw
          source_id: s_cPrCREfBJ11S4eiVQ62Kj3
          stance: supports
          locator: CBDB:126783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_cPrCREfBJ11S4eiVQ62Kj3
            source_type: api_record
            title: 中国历代人物传记资料库：王蓂（CBDB 126783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126783&o=json
            external_identifier: CBDB:126783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WEZR6E6dy2f6HzVhBGMma2
        subject_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蓂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5ga3ETZ7qCHayGqKLQJ6EJ
          claim_id: c_WEZR6E6dy2f6HzVhBGMma2
          source_id: s_cPrCREfBJ11S4eiVQ62Kj3
          stance: supports
          locator: CBDB:126783
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i_aye2zmhCx68S--3Wnp0n
        subject_person_id: p_gGC23xhwQXL2gcAMcS3G3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dyTZWBNUQoc4gryQu2qUMx
          claim_id: c_i_aye2zmhCx68S--3Wnp0n
          source_id: s_F2ub4THmm62GUS1a2VdLK1
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F2ub4THmm62GUS1a2VdLK1
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 272389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272389&o=json
            external_identifier: CBDB:272389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gGC23xhwQXL2gcAMcS3G3U
        status: active
        display_name: 王序
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0O_0ezEHmrUyyP5W8roTTq
        subject_person_id: p_dYegPiWdT54QHJwpw2osf4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZbZy9Fs6_X73ArbjUiN2Zj
          claim_id: c_0O_0ezEHmrUyyP5W8roTTq
          source_id: s_pay7sv6ejVEo8FKXMYVU5q
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pay7sv6ejVEo8FKXMYVU5q
            source_type: api_record
            title: 中国历代人物传记资料库：王吉（CBDB 272388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272388&o=json
            external_identifier: CBDB:272388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dYegPiWdT54QHJwpw2osf4
        status: active
        display_name: 王吉
        merged_into_person_id: null
    - claim:
        id: c_Ow58vbBxsLJzSNvOtEDP69
        subject_person_id: p_zDqWGnkLPXbEcaV9HD6KiU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vCw7XFwQYPsnnHB4AgZ9G1
          claim_id: c_Ow58vbBxsLJzSNvOtEDP69
          source_id: s_tH8pVqSpGZXuZUCiFWdJkL
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tH8pVqSpGZXuZUCiFWdJkL
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 272387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272387&o=json
            external_identifier: CBDB:272387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zDqWGnkLPXbEcaV9HD6KiU
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王蓂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蓂，史料所见人物。本项目依据《中国历代人物传记资料库：王蓂（CBDB 126783）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王蓂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGC23xhwQXL2gcAMcS3G3U | 王序 | accepted |
| ancestors | p_dYegPiWdT54QHJwpw2osf4 | 王吉 | accepted |
| ancestors | p_zDqWGnkLPXbEcaV9HD6KiU | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉（CBDB 272388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272388&o=json)
- [中国历代人物传记资料库：王蓂（CBDB 126783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126783&o=json)
- [中国历代人物传记资料库：王序（CBDB 272389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272389&o=json)
- [中国历代人物传记资料库：王忠（CBDB 272387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272387&o=json)
