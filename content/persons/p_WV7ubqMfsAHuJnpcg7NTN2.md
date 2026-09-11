---
schema: wang-person/v1
id: p_WV7ubqMfsAHuJnpcg7NTN2
status: active
merged_into: null
display_name: 王瑤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQ2scUgFT5neVq5KbTzCev
        subject_person_id: p_WV7ubqMfsAHuJnpcg7NTN2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AvLy96JoBMU6YqMJv1xPa3
          claim_id: c_FQ2scUgFT5neVq5KbTzCev
          source_id: s_d6BBJqo4tK4Qt7C1Bb7xN8
          stance: supports
          locator: CBDB:215865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215865）
          source: &a1
            id: s_d6BBJqo4tK4Qt7C1Bb7xN8
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 215865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215865&o=json
            external_identifier: CBDB:215865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ieU4mcoiBSCxA4p8umCa7M
        subject_person_id: p_WV7ubqMfsAHuJnpcg7NTN2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤，明人物。萬曆五年進士，曾任兵部尚書、少保、太子太保。（中国历代人物传记资料库 CBDB 215865）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GCafA8CJIV--5x7DYSgY-w
          claim_id: c_ieU4mcoiBSCxA4p8umCa7M
          source_id: s_d6BBJqo4tK4Qt7C1Bb7xN8
          stance: supports
          locator: CBDB:215865
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
        id: c_YrWR8A5JcuTl1RBg1A07kl
        subject_person_id: p_WV7ubqMfsAHuJnpcg7NTN2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_68bfPNUHA98KKMwPnJ12C3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_df9_UvqVUCgJFzvDEeHOLz
          claim_id: c_YrWR8A5JcuTl1RBg1A07kl
          source_id: s_HXFJiTCNt1A5HD2f7yj48e
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HXFJiTCNt1A5HD2f7yj48e
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 124982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json
            external_identifier: CBDB:124982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_68bfPNUHA98KKMwPnJ12C3
        status: active
        display_name: 王謙
        merged_into_person_id: null
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | 王瑤，明人物。萬曆五年進士，曾任兵部尚書、少保、太子太保。（中国历代人物传记资料库 CBDB 215865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_68bfPNUHA98KKMwPnJ12C3 | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 124982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124982&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 215865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215865&o=json)
