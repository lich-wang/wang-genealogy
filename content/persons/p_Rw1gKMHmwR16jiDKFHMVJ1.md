---
schema: wang-person/v1
id: p_Rw1gKMHmwR16jiDKFHMVJ1
status: active
merged_into: null
display_name: 王景曜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vDXCAoNjdZvNvQsRvmisZ1
        subject_person_id: p_Rw1gKMHmwR16jiDKFHMVJ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景曜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TPF8Z4rW6Co1XStP4W1QRm
          claim_id: c_vDXCAoNjdZvNvQsRvmisZ1
          source_id: s_cwEorLdzT53M6CFyvWZGfR
          stance: supports
          locator: CBDB:577779
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（577779）
          source: &a1
            id: s_cwEorLdzT53M6CFyvWZGfR
            source_type: api_record
            title: 中国历代人物传记资料库：王景曜（CBDB 577779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577779&o=json
            external_identifier: CBDB:577779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQXUD4dippXjSjDH5p19Uk
        subject_person_id: p_Rw1gKMHmwR16jiDKFHMVJ1
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
        - id: cs_jHhohU2vGDpbVRitxapCUg
          claim_id: c_EQXUD4dippXjSjDH5p19Uk
          source_id: s_cwEorLdzT53M6CFyvWZGfR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fSd6LFN6PPorTDd0jAweKi
        subject_person_id: p_Rw1gKMHmwR16jiDKFHMVJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C1y17W3qygeeAMiVMQb9hF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fopwUZtapHRdMbswUvnNp-
          claim_id: c_fSd6LFN6PPorTDd0jAweKi
          source_id: s_uyK7i8N9LQGRL43r9YumDx
          stance: supports
          locator: "民國歙縣志: 十六卷，lgid=1163778：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uyK7i8N9LQGRL43r9YumDx
            source_type: api_record
            title: 中国历代人物传记资料库：王立名（CBDB 577781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577781&o=json
            external_identifier: CBDB:577781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C1y17W3qygeeAMiVMQb9hF
        status: active
        display_name: 王立名
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景曜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景曜 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_C1y17W3qygeeAMiVMQb9hF | 王立名 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景曜（CBDB 577779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577779&o=json)
- [中国历代人物传记资料库：王立名（CBDB 577781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=577781&o=json)
