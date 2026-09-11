---
schema: wang-person/v1
id: p_H6ADXcsddQz8PL3XHF26HH
status: active
merged_into: null
display_name: 王讓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rJnYM6KLMTt2W7EWDncaPq
        subject_person_id: p_H6ADXcsddQz8PL3XHF26HH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ppmauLB4SUGfpKJM8686N
          claim_id: c_rJnYM6KLMTt2W7EWDncaPq
          source_id: s_QgZuGLFmuV1PCvKdFnt51y
          stance: supports
          locator: CBDB:126898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126898）
          source: &a1
            id: s_QgZuGLFmuV1PCvKdFnt51y
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 126898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126898&o=json
            external_identifier: CBDB:126898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6eHgT38U712T5h6U24PPYD
        subject_person_id: p_H6ADXcsddQz8PL3XHF26HH
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
        - id: cs_6DuHh9bQfye2yu6Ef85AUP
          claim_id: c_6eHgT38U712T5h6U24PPYD
          source_id: s_QgZuGLFmuV1PCvKdFnt51y
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
        id: c_OrlYheuF-OPpzfzx0jlq_B
        subject_person_id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H6ADXcsddQz8PL3XHF26HH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oH-NEioyuGU54uNYBSRFUn
          claim_id: c_OrlYheuF-OPpzfzx0jlq_B
          source_id: s_QgZuGLFmuV1PCvKdFnt51y
          stance: supports
          locator: 天順八年進士登科錄:一卷，第二甲第二十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rQ3QkQ6Ppvi2nvZM6NWRzv
        status: active
        display_name: 王應橫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QVJWwlq3zx_JD6EYQtenWd
        subject_person_id: p_H6ADXcsddQz8PL3XHF26HH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EaJ6K3vUFDXXag6xf7Rw8V
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VGH1pE40aabHOfEu0rQOqz
          claim_id: c_QVJWwlq3zx_JD6EYQtenWd
          source_id: s_fbm2jyThna1zKpCSScM7hW
          stance: supports
          locator: 天順八年進士登科錄:一卷，第二甲第二十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fbm2jyThna1zKpCSScM7hW
            source_type: api_record
            title: 中国历代人物传记资料库：姜氏(王讓妻)（CBDB 326318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326318&o=json
            external_identifier: CBDB:326318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EaJ6K3vUFDXXag6xf7Rw8V
        status: active
        display_name: 姜氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_EHxhbmiwrmE4kqNRBqyiqd
        subject_person_id: p_ZfvKo5JYpUwjUfsAxry79D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H6ADXcsddQz8PL3XHF26HH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bsxzb4P2eBNQLivX8fDbDY
          claim_id: c_EHxhbmiwrmE4kqNRBqyiqd
          source_id: s_QgZuGLFmuV1PCvKdFnt51y
          stance: supports
          locator: 天順八年進士登科錄:一卷，第二甲第二十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZfvKo5JYpUwjUfsAxry79D
        status: active
        display_name: 王普達
        merged_into_person_id: null
    - claim:
        id: c_4shFZDLJaYVNHkna7jXDYB
        subject_person_id: p_J14w43hnTvbQMG981aghEQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H6ADXcsddQz8PL3XHF26HH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wzRFYhfOpw8jPA23ckBAWY
          claim_id: c_4shFZDLJaYVNHkna7jXDYB
          source_id: s_QgZuGLFmuV1PCvKdFnt51y
          stance: supports
          locator: 天順八年進士登科錄:一卷，第二甲第二十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J14w43hnTvbQMG981aghEQ
        status: active
        display_name: 王庭槐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rQ3QkQ6Ppvi2nvZM6NWRzv | 王應橫 | accepted |
| spouses | p_EaJ6K3vUFDXXag6xf7Rw8V | 姜氏 | accepted |
| ancestors | p_ZfvKo5JYpUwjUfsAxry79D | 王普達 | accepted |
| ancestors | p_J14w43hnTvbQMG981aghEQ | 王庭槐 | accepted |

## 外部来源

- [中国历代人物传记资料库：姜氏(王讓妻)（CBDB 326318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326318&o=json)
- [中国历代人物传记资料库：王讓（CBDB 126898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126898&o=json)
