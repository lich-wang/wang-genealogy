---
schema: wang-person/v1
id: p_EGWu3kuNQhVSiewcJGE7Qn
status: active
merged_into: null
display_name: 王弘道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ajteHsxjXQpdubtV5HyiCK
        subject_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xMnK8MJuYs2Vn5RbKjyVSn
          claim_id: c_ajteHsxjXQpdubtV5HyiCK
          source_id: s_YWgXP5Er11wfmbprC4GLQ2
          stance: supports
          locator: CBDB:270431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270431）
          source: &a1
            id: s_YWgXP5Er11wfmbprC4GLQ2
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 270431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json
            external_identifier: CBDB:270431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J7R4W5A51GKXvs9SHNHFgQ
        subject_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘道，明人物。弘治十五年進士，籍贯鹽山，入仕監生。（中国历代人物传记资料库 CBDB 270431）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yhofiQ50K4Cq-tCm69Hgez
          claim_id: c_J7R4W5A51GKXvs9SHNHFgQ
          source_id: s_YWgXP5Er11wfmbprC4GLQ2
          stance: supports
          locator: CBDB:270431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_plkOhiC_ot6iwz8RrNHzS7
        subject_person_id: p_USmM7iSRa4vK3jsnZL7c34
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KCYv8ujN6uJnddrpIJcJD2
          claim_id: c_plkOhiC_ot6iwz8RrNHzS7
          source_id: s_8e4J-1_PEs-Xm80wSxnjk4
          stance: supports
          locator: CBDB：兄弟 王顯道（201310）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘道 与 王顯道 为同胞（CBDB 记「弟」），王顯道 之父／母即 王弘道 之父／母。
          source:
            id: s_8e4J-1_PEs-Xm80wSxnjk4
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 270431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json
            external_identifier: CBDB:270431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_USmM7iSRa4vK3jsnZL7c34
        status: active
        display_name: 王文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NUe07cgJIltR2y4aLN9vXG
        subject_person_id: p_EGWu3kuNQhVSiewcJGE7Qn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p6LM7kMHNYz7GAHB99D8XL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8_Ff8AbHjy2GvWwRmWC0g4
          claim_id: c_NUe07cgJIltR2y4aLN9vXG
          source_id: s_8e4J-1_PEs-Xm80wSxnjk4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201310 王顯道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8e4J-1_PEs-Xm80wSxnjk4
            source_type: api_record
            title: 中国历代人物传记资料库：王弘道（CBDB 270431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json
            external_identifier: CBDB:270431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p6LM7kMHNYz7GAHB99D8XL
        status: active
        display_name: 王顯道
        merged_into_person_id: null
---

# 王弘道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘道 | accepted |
| bio.summary | 王弘道，明人物。弘治十五年進士，籍贯鹽山，入仕監生。（中国历代人物传记资料库 CBDB 270431） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_USmM7iSRa4vK3jsnZL7c34 | 王文 | accepted |
| other | p_p6LM7kMHNYz7GAHB99D8XL | 王顯道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘道（CBDB 270431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270431&o=json)
