---
schema: wang-person/v1
id: p_D4KBJwKfJ7VCaXB4ym7dw3
status: active
merged_into: null
display_name: 王紀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R8oc226PKa1YtLBn5fcH56
        subject_person_id: p_D4KBJwKfJ7VCaXB4ym7dw3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jvJeNCA2AnjT3QCU7gRNxS
          claim_id: c_R8oc226PKa1YtLBn5fcH56
          source_id: s_C84eN9oP1VqLiFoksAa6AL
          stance: supports
          locator: CBDB:258716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（258716）
          source: &a1
            id: s_C84eN9oP1VqLiFoksAa6AL
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 258716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json
            external_identifier: CBDB:258716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZAPYuNvkRkASv1kTaCpNLy
        subject_person_id: p_D4KBJwKfJ7VCaXB4ym7dw3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。成化二十三年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 258716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2exKiKNjKhjPbJJJg_ZgOT
          claim_id: c_ZAPYuNvkRkASv1kTaCpNLy
          source_id: s_C84eN9oP1VqLiFoksAa6AL
          stance: supports
          locator: CBDB:258716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bu_nN8kBJwfOBn1kk7tUWV
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D4KBJwKfJ7VCaXB4ym7dw3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9im_k50PKggkgwDKKw5q1f
          claim_id: c_bu_nN8kBJwfOBn1kk7tUWV
          source_id: s_WJlrefy4QWevIaETzEYtpi
          stance: supports
          locator: CBDB：兄弟 王緯（200487）之父／母 王豫
          quotation: null
          interpretation_note: 由兄弟关系推断：王紀 与 王緯 为同胞（CBDB 记「兄」），王緯 之父／母即 王紀 之父／母。
          source:
            id: s_WJlrefy4QWevIaETzEYtpi
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 258716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json
            external_identifier: CBDB:258716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A34R6HSqpELVRnhSkVhaV5
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2PUt54SvNtJ2Uwt5R54QsM
        subject_person_id: p_D4KBJwKfJ7VCaXB4ym7dw3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6QMPRUN5WiSUd8dK2z6ic
          claim_id: c_2PUt54SvNtJ2Uwt5R54QsM
          source_id: s_WJlrefy4QWevIaETzEYtpi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WJlrefy4QWevIaETzEYtpi
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 258716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json
            external_identifier: CBDB:258716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RtbMaDgB4aPoZ2sWestmc6
        status: active
        display_name: 王緯
        merged_into_person_id: null
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。成化二十三年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 258716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A34R6HSqpELVRnhSkVhaV5 | 王豫 | accepted |
| other | p_RtbMaDgB4aPoZ2sWestmc6 | 王緯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 258716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json)
