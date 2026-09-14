---
schema: wang-person/v1
id: p_jdMhnFBLX1ncq8S4Ewhj3x
status: active
merged_into: null
display_name: 王有恆
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PefCJth6X6wL8hYZgFE9G1
        subject_person_id: p_jdMhnFBLX1ncq8S4Ewhj3x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5DwFEFwYn7L9NWYEzN1Cdk
          claim_id: c_PefCJth6X6wL8hYZgFE9G1
          source_id: s_3QNgUEc2AECesmZvuMsuXj
          stance: supports
          locator: CBDB:249008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249008）
          source: &a1
            id: s_3QNgUEc2AECesmZvuMsuXj
            source_type: api_record
            title: 中国历代人物传记资料库：王有恆（CBDB 249008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249008&o=json
            external_identifier: CBDB:249008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s96rGGpXjrgBmtDfZcB9NZ
        subject_person_id: p_jdMhnFBLX1ncq8S4Ewhj3x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有恆，明人物。成化十一年進士，籍贯長樂。（中国历代人物传记资料库 CBDB 249008）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u_fcfac3wh1jL7LaES00q4
          claim_id: c_s96rGGpXjrgBmtDfZcB9NZ
          source_id: s_3QNgUEc2AECesmZvuMsuXj
          stance: supports
          locator: CBDB:249008
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2ZBsjIh2vLafXhLbRA1Hx4
        subject_person_id: p_pEywX39NWKUq9nsDk1FUH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jdMhnFBLX1ncq8S4Ewhj3x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_51hRI3g6FzaGeEuybGsHXL
          claim_id: c_2ZBsjIh2vLafXhLbRA1Hx4
          source_id: s_JGqsDy-geojBUuHR1DuB8J
          stance: supports
          locator: CBDB：兄弟 王有恬（199727）之父／母 王明哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王有恆 与 王有恬 为同胞（CBDB 记「弟」），王有恬 之父／母即 王有恆 之父／母。
          source:
            id: s_JGqsDy-geojBUuHR1DuB8J
            source_type: api_record
            title: 中国历代人物传记资料库：王有恆（CBDB 249008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249008&o=json
            external_identifier: CBDB:249008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pEywX39NWKUq9nsDk1FUH7
        status: active
        display_name: 王明哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e7-jipq0CSeiqc7rpk0ZFW
        subject_person_id: p_jdMhnFBLX1ncq8S4Ewhj3x
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgM6VnqAFO_v-ploPsEFgW
          claim_id: c_e7-jipq0CSeiqc7rpk0ZFW
          source_id: s_JGqsDy-geojBUuHR1DuB8J
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199727 王有恬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JGqsDy-geojBUuHR1DuB8J
            source_type: api_record
            title: 中国历代人物传记资料库：王有恆（CBDB 249008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249008&o=json
            external_identifier: CBDB:249008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pTZB8fs7H6HDdDBGYmoZTE
        status: active
        display_name: 王有恬
        merged_into_person_id: null
---

# 王有恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有恆 | accepted |
| bio.summary | 王有恆，明人物。成化十一年進士，籍贯長樂。（中国历代人物传记资料库 CBDB 249008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pEywX39NWKUq9nsDk1FUH7 | 王明哲 | accepted |
| other | p_pTZB8fs7H6HDdDBGYmoZTE | 王有恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有恆（CBDB 249008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249008&o=json)
