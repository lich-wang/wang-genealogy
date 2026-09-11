---
schema: wang-person/v1
id: p_FpQKFr1KFEMUJY3pw9XhzH
status: active
merged_into: null
display_name: 王文運
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DpreWk4PC3xYuQi7Tjx9Rk
        subject_person_id: p_FpQKFr1KFEMUJY3pw9XhzH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FNf59FGjE37oV4oMYC3oXG
          claim_id: c_DpreWk4PC3xYuQi7Tjx9Rk
          source_id: s_ReM2Hxv6ptmKsF32KGA9zx
          stance: supports
          locator: CBDB:557658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557658）
          source: &a1
            id: s_ReM2Hxv6ptmKsF32KGA9zx
            source_type: api_record
            title: 中国历代人物传记资料库：王文運（CBDB 557658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557658&o=json
            external_identifier: CBDB:557658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.541Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7BU3yHYAmfu1JrfWv7KQea
        subject_person_id: p_FpQKFr1KFEMUJY3pw9XhzH
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
        - id: cs_Hgsf1KQmkkPRCaEYNu48Eh
          claim_id: c_7BU3yHYAmfu1JrfWv7KQea
          source_id: s_ReM2Hxv6ptmKsF32KGA9zx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TgSz_XtotedNx2R4_Di92s
        subject_person_id: p_FpQKFr1KFEMUJY3pw9XhzH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uqFWMhK4tWJJMSM5h8iUyX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FB5FXAypn6hxrOgFnpTeLk
          claim_id: c_TgSz_XtotedNx2R4_Di92s
          source_id: s_XgorZCT-aNuB38IjfoxHPE
          stance: supports
          locator: 南陽府志，lgid=878788：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XgorZCT-aNuB38IjfoxHPE
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王文運妻)（CBDB 557659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557659&o=json
            external_identifier: CBDB:557659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uqFWMhK4tWJJMSM5h8iUyX
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王文運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文運 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uqFWMhK4tWJJMSM5h8iUyX | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王文運妻)（CBDB 557659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557659&o=json)
- [中国历代人物传记资料库：王文運（CBDB 557658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557658&o=json)
