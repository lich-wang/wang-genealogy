---
schema: wang-person/v1
id: p_fj97sG1LzpBaRtp35NJpLY
status: active
merged_into: null
display_name: 王亮器
cbdb_id: 231882
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jT4UWWD5ThM5KpqDoUkZ1s
        subject_person_id: p_fj97sG1LzpBaRtp35NJpLY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮器，明人物。籍贯太倉州。（中国历代人物传记资料库 CBDB 231882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zNkgxPHnlMQAg5aNZCmCYP
          claim_id: c_jT4UWWD5ThM5KpqDoUkZ1s
          source_id: s_yCWU7sFJwzCiRuhfERVnmh
          stance: supports
          locator: CBDB:231882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yCWU7sFJwzCiRuhfERVnmh
            source_type: api_record
            title: 中国历代人物传记资料库：王亮器（CBDB 231882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231882&o=json
            external_identifier: CBDB:231882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q8x3GQifZRomV7Ckr9Ay41
        subject_person_id: p_fj97sG1LzpBaRtp35NJpLY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xw61dCDzHbo4qmiVhyE5bD
          claim_id: c_q8x3GQifZRomV7Ckr9Ay41
          source_id: s_yCWU7sFJwzCiRuhfERVnmh
          stance: supports
          locator: CBDB:231882
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HYnQEnXuwYGqJ-gD3sSsbM
        subject_person_id: p_fj97sG1LzpBaRtp35NJpLY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xzYVqiM4K9XuHlDWm2-3rn
          claim_id: c_HYnQEnXuwYGqJ-gD3sSsbM
          source_id: s_yCWU7sFJwzCiRuhfERVnmh
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yCWU7sFJwzCiRuhfERVnmh
            source_type: api_record
            title: 中国历代人物传记资料库：王亮器（CBDB 231882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231882&o=json
            external_identifier: CBDB:231882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AFdJ7pAjfwQ6cMiK8RCDT2
        status: active
        display_name: 王在晉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亮器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王亮器，明人物。籍贯太倉州。（中国历代人物传记资料库 CBDB 231882） | accepted |
| name.primary | 王亮器 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_AFdJ7pAjfwQ6cMiK8RCDT2 | 王在晉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮器（CBDB 231882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231882&o=json)
