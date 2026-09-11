---
schema: wang-person/v1
id: p_cBxTbbJnkV5KHHjQSg8Ntf
status: active
merged_into: null
display_name: 王景陞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ScVQNr3MQ9KWM9jnH384F
        subject_person_id: p_cBxTbbJnkV5KHHjQSg8Ntf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TjdLo1SSqJbSfQhGG1oVXf
          claim_id: c_6ScVQNr3MQ9KWM9jnH384F
          source_id: s_zfG5NvRoogAYAyZBDEcox1
          stance: supports
          locator: CBDB:330010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330010）
          source: &a1
            id: s_zfG5NvRoogAYAyZBDEcox1
            source_type: api_record
            title: 中国历代人物传记资料库：王景陞（CBDB 330010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330010&o=json
            external_identifier: CBDB:330010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pi3vEW4ABcFkCEn3gH6rB2
        subject_person_id: p_cBxTbbJnkV5KHHjQSg8Ntf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景陞，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 330010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XZWKRDmALT5mHmHLP4uOCb
          claim_id: c_Pi3vEW4ABcFkCEn3gH6rB2
          source_id: s_zfG5NvRoogAYAyZBDEcox1
          stance: supports
          locator: CBDB:330010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_RXPpYAJU_iia_q-dwWUGlP
        subject_person_id: p_cBxTbbJnkV5KHHjQSg8Ntf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aPcrqB9XkxSACSANyGxVsW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jMv1x28YLY47Klsj6uSg9k
          claim_id: c_RXPpYAJU_iia_q-dwWUGlP
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DjdLKPpkYfPVp98V5ZvCZr
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 205226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json
            external_identifier: CBDB:205226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aPcrqB9XkxSACSANyGxVsW
        status: active
        display_name: 王軒
        merged_into_person_id: null
  other: []
---

# 王景陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景陞 | accepted |
| bio.summary | 王景陞，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 330010） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aPcrqB9XkxSACSANyGxVsW | 王軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景陞（CBDB 330010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330010&o=json)
- [中国历代人物传记资料库：王軒（CBDB 205226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json)
