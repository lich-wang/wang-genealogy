---
schema: wang-person/v1
id: p_W5GaHUMJSWCuMuNBjxxdj7
status: active
merged_into: null
display_name: 王友諒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_abGex8pQjHdMyCujVrsXN2
        subject_person_id: p_W5GaHUMJSWCuMuNBjxxdj7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K2Wqa9R2Gvj1PniA8UDToE
          claim_id: c_abGex8pQjHdMyCujVrsXN2
          source_id: s_3J9pmGsfd9UKrk238pfduo
          stance: supports
          locator: CBDB:309073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309073）
          source: &a1
            id: s_3J9pmGsfd9UKrk238pfduo
            source_type: api_record
            title: 中国历代人物传记资料库：王友諒（CBDB 309073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309073&o=json
            external_identifier: CBDB:309073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ARop2cRpHnSN5NFK4dsaHn
        subject_person_id: p_W5GaHUMJSWCuMuNBjxxdj7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4uBY56u9LE1UwkzQsY37T4
          claim_id: c_ARop2cRpHnSN5NFK4dsaHn
          source_id: s_3J9pmGsfd9UKrk238pfduo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_fOUChNZCUDpbYquQT529cx
        subject_person_id: p_W5GaHUMJSWCuMuNBjxxdj7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qADtxjrVEChTrGk5M7bGg2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yDX0AKbUbILNkexpMGUu_0
          claim_id: c_fOUChNZCUDpbYquQT529cx
          source_id: s_zRnrEasJ9KGuHqrF8D8JQK
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第一百九十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zRnrEasJ9KGuHqrF8D8JQK
            source_type: api_record
            title: 中国历代人物传记资料库：王雯（CBDB 198731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198731&o=json
            external_identifier: CBDB:198731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.506Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qADtxjrVEChTrGk5M7bGg2
        status: active
        display_name: 王雯
        merged_into_person_id: null
  other: []
---

# 王友諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友諒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qADtxjrVEChTrGk5M7bGg2 | 王雯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雯（CBDB 198731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198731&o=json)
- [中国历代人物传记资料库：王友諒（CBDB 309073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309073&o=json)
