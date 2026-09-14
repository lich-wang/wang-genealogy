---
schema: wang-person/v1
id: p_DR4C21YnAw4Ege8955RHsa
status: active
merged_into: null
display_name: 王紳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qQZpQSCeXFUMSye57HMfWw
        subject_person_id: p_DR4C21YnAw4Ege8955RHsa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F2havRaXfFFuWmokKHmmr9
          claim_id: c_qQZpQSCeXFUMSye57HMfWw
          source_id: s_iTWJoa23BGZtQmKNHx27Q2
          stance: supports
          locator: CBDB:247360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247360）
          source: &a1
            id: s_iTWJoa23BGZtQmKNHx27Q2
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 247360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json
            external_identifier: CBDB:247360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.114Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KQNd4MDnMVbJeWKY1TCCtx
        subject_person_id: p_DR4C21YnAw4Ege8955RHsa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳，明人物。成化八年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 247360）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vzjX6lpRm-FvhoT1vxaayQ
          claim_id: c_KQNd4MDnMVbJeWKY1TCCtx
          source_id: s_iTWJoa23BGZtQmKNHx27Q2
          stance: supports
          locator: CBDB:247360
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__qUkEthMMIDRuBnrfTi-eO
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DR4C21YnAw4Ege8955RHsa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUyXHhe18Is7Pl4IJ1ik5i
          claim_id: c__qUkEthMMIDRuBnrfTi-eO
          source_id: s_BUYW0Y5fSDptsgQ4jEeRpt
          stance: supports
          locator: CBDB：兄弟 王經（199619）之父／母 王讓
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王經 为同胞（CBDB 记「兄」），王經 之父／母即 王紳 之父／母。
          source:
            id: s_BUYW0Y5fSDptsgQ4jEeRpt
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 247360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json
            external_identifier: CBDB:247360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Y9vSpLkuvgM5TzoTn8thR
        status: active
        display_name: 王讓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oxPSPDlWbzwbMVLMzb_6Fw
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DR4C21YnAw4Ege8955RHsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZ_hsWQ9mqXs3fz8DjZfSr
          claim_id: c_oxPSPDlWbzwbMVLMzb_6Fw
          source_id: s_BUYW0Y5fSDptsgQ4jEeRpt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199619 王經）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BUYW0Y5fSDptsgQ4jEeRpt
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 247360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json
            external_identifier: CBDB:247360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9qy8VX4YhBeXV8fGKmBp1E
        status: active
        display_name: 王經
        merged_into_person_id: null
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | 王紳，明人物。成化八年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 247360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1Y9vSpLkuvgM5TzoTn8thR | 王讓 | accepted |
| other | p_9qy8VX4YhBeXV8fGKmBp1E | 王經 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 247360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247360&o=json)
