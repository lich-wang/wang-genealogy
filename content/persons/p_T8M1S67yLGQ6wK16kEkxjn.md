---
schema: wang-person/v1
id: p_T8M1S67yLGQ6wK16kEkxjn
status: active
merged_into: null
display_name: 王曾祿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W94kePn6U4dBB8AeCZALB6
        subject_person_id: p_T8M1S67yLGQ6wK16kEkxjn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KTQwdpZa2MwUwYLFwtWkCS
          claim_id: c_W94kePn6U4dBB8AeCZALB6
          source_id: s_jbaZr7wHuBQKDV42HiMfYb
          stance: supports
          locator: CBDB:34192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34192）
          source: &a1
            id: s_jbaZr7wHuBQKDV42HiMfYb
            source_type: api_record
            title: 中国历代人物传记资料库：王曾祿（CBDB 34192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34192&o=json
            external_identifier: CBDB:34192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jKpfA2Ab6deZ1u9qVcM5MA
        subject_person_id: p_T8M1S67yLGQ6wK16kEkxjn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1672年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jDCRVTVRX1szjb8F4VV4RT
          claim_id: c_jKpfA2Ab6deZ1u9qVcM5MA
          source_id: s_jbaZr7wHuBQKDV42HiMfYb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_3CgGoYFXLqjTZPYPVPSrrS
        subject_person_id: p_T8M1S67yLGQ6wK16kEkxjn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N9irxLGUR3T8CfMyvSLBgu
          claim_id: c_3CgGoYFXLqjTZPYPVPSrrS
          source_id: s_jbaZr7wHuBQKDV42HiMfYb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PSpY8yS117uXegEn5epwCu
        subject_person_id: p_T8M1S67yLGQ6wK16kEkxjn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3VvTmwE4bFD6vz8ctwz3Ly
          claim_id: c_PSpY8yS117uXegEn5epwCu
          source_id: s_jbaZr7wHuBQKDV42HiMfYb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ot5XbZTjA7mg-x-g097Izi
        subject_person_id: p_i4uAHMCH2MArDtTa6SQ5iE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T8M1S67yLGQ6wK16kEkxjn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yTIUD9NBZ03fKCd1RE5POF
          claim_id: c_ot5XbZTjA7mg-x-g097Izi
          source_id: s_jbaZr7wHuBQKDV42HiMfYb
          stance: supports
          locator: CBDB 双向互证（父 王式耜 ⇄ 子 王曾祿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_i4uAHMCH2MArDtTa6SQ5iE
        status: active
        display_name: 王式耜
        merged_into_person_id: null
  children:
    - claim:
        id: c_LcB6CvB627Es9sHbmsrIgG
        subject_person_id: p_T8M1S67yLGQ6wK16kEkxjn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sCuihMoKaDM57tF5Pkp3Mj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emwAeC68_9WVb1r7H6IDFW
          claim_id: c_LcB6CvB627Es9sHbmsrIgG
          source_id: s_jbaZr7wHuBQKDV42HiMfYb
          stance: supports
          locator: CBDB 双向互证（子 王安國 ⇄ 父 王曾祿）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sCuihMoKaDM57tF5Pkp3Mj
        status: active
        display_name: 王安国
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曾祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾祿 | accepted |
| birth.date | 1672年 | accepted |
| death.date | 1743年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_i4uAHMCH2MArDtTa6SQ5iE | 王式耜 | accepted |
| children | p_sCuihMoKaDM57tF5Pkp3Mj | 王安国 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾祿（CBDB 34192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34192&o=json)
