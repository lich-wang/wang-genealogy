---
schema: wang-person/v1
id: p_P1dhJmvwkpPFXSBCejW61q
status: active
merged_into: null
display_name: 王實
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_thbaKY5oAwWk6SHTBWjDxT
        subject_person_id: p_P1dhJmvwkpPFXSBCejW61q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dPpNTQerqhh1wHKXiRcFqj
          claim_id: c_thbaKY5oAwWk6SHTBWjDxT
          source_id: s_MRFNxLeg5uW4Eq8hqshAJ9
          stance: supports
          locator: CBDB:245410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245410）
          source: &a1
            id: s_MRFNxLeg5uW4Eq8hqshAJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 245410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245410&o=json
            external_identifier: CBDB:245410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.068Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WYjaQEZjzNPJR1DBPDLemv
        subject_person_id: p_P1dhJmvwkpPFXSBCejW61q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V0swjUXz-BJ0Vxgt0FXCPD
          claim_id: c_WYjaQEZjzNPJR1DBPDLemv
          source_id: s_MRFNxLeg5uW4Eq8hqshAJ9
          stance: supports
          locator: CBDB:245410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6a9qiaJjDeKh66XK37t2HO
        subject_person_id: p_2jbUSp9pUyEuUdReswY15E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P1dhJmvwkpPFXSBCejW61q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2DD_FTpCdNvLMYNejKUZEp
          claim_id: c_6a9qiaJjDeKh66XK37t2HO
          source_id: s_9f8-G3hVwBYke823M00gJK
          stance: supports
          locator: CBDB：兄弟 王宜（199464）之父／母 王載錫
          quotation: null
          interpretation_note: 由兄弟关系推断：王實 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王實 之父／母。
          source:
            id: s_9f8-G3hVwBYke823M00gJK
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 245410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245410&o=json
            external_identifier: CBDB:245410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2jbUSp9pUyEuUdReswY15E
        status: active
        display_name: 王載錫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Em7TLSic7A-1eJJ5yyJbn5
        subject_person_id: p_P1dhJmvwkpPFXSBCejW61q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EmozsGpMU-uIzsNU7vFJO3
          claim_id: c_Em7TLSic7A-1eJJ5yyJbn5
          source_id: s_9f8-G3hVwBYke823M00gJK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199464 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9f8-G3hVwBYke823M00gJK
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 245410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245410&o=json
            external_identifier: CBDB:245410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oQRajD9oDBfYHERmWbMNcH
        status: active
        display_name: 王宜
        merged_into_person_id: null
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | 王實，明人物。成化八年進士，籍贯新淦。（中国历代人物传记资料库 CBDB 245410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2jbUSp9pUyEuUdReswY15E | 王載錫 | accepted |
| other | p_oQRajD9oDBfYHERmWbMNcH | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 245410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245410&o=json)
