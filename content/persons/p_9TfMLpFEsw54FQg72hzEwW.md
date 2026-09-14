---
schema: wang-person/v1
id: p_9TfMLpFEsw54FQg72hzEwW
status: active
merged_into: null
display_name: 王侃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8pDXpwJoQ17FC3VpG4oXW
        subject_person_id: p_9TfMLpFEsw54FQg72hzEwW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v5yVv1xyYPmVZ1y1mvhY7y
          claim_id: c_J8pDXpwJoQ17FC3VpG4oXW
          source_id: s_VfV7H6tcTv5KjMEvJSbq7k
          stance: supports
          locator: CBDB:242565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242565）
          source: &a1
            id: s_VfV7H6tcTv5KjMEvJSbq7k
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 242565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242565&o=json
            external_identifier: CBDB:242565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2Mh3kaR7As3qwYknzNa5F
        subject_person_id: p_9TfMLpFEsw54FQg72hzEwW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃，明人物。成化二年進士，籍贯寧州。（中国历代人物传记资料库 CBDB 242565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A5_86vDz-ckXG7qtYIn4Km
          claim_id: c_P2Mh3kaR7As3qwYknzNa5F
          source_id: s_VfV7H6tcTv5KjMEvJSbq7k
          stance: supports
          locator: CBDB:242565
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l9DlO8LBV4-1ro8Fg8u2fh
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9TfMLpFEsw54FQg72hzEwW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1VzlYF6Nke8G4SmEw5zOK_
          claim_id: c_l9DlO8LBV4-1ro8Fg8u2fh
          source_id: s_GCj74Fu3oWLkkIgCL-xlFR
          stance: supports
          locator: CBDB：兄弟 王偉（67431）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王侃 之父／母。
          source:
            id: s_GCj74Fu3oWLkkIgCL-xlFR
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 242565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242565&o=json
            external_identifier: CBDB:242565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EN3ydiKjRibv3nRcEaCbqj
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WJz_aG2aD-fLm9mvnJBT8Z
        subject_person_id: p_9TfMLpFEsw54FQg72hzEwW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDsn6hGgVtRIKQLvgZVqK3
          claim_id: c_WJz_aG2aD-fLm9mvnJBT8Z
          source_id: s_GCj74Fu3oWLkkIgCL-xlFR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67431 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GCj74Fu3oWLkkIgCL-xlFR
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 242565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242565&o=json
            external_identifier: CBDB:242565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XFNHC3xzSn5PQ61c2MLe3i
        status: active
        display_name: 王偉
        merged_into_person_id: null
---

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | 王侃，明人物。成化二年進士，籍贯寧州。（中国历代人物传记资料库 CBDB 242565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EN3ydiKjRibv3nRcEaCbqj | 王政 | accepted |
| other | p_XFNHC3xzSn5PQ61c2MLe3i | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 242565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242565&o=json)
