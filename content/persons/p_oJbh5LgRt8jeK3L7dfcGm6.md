---
schema: wang-person/v1
id: p_oJbh5LgRt8jeK3L7dfcGm6
status: active
merged_into: null
display_name: 王鍭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cg6d3i2oTZqpZ4yZQSynp
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z65D5q4yeMd26pej65fomG
          claim_id: c_8cg6d3i2oTZqpZ4yZQSynp
          source_id: s_6gFZc5W4zM81hVbdnHGmZR
          stance: supports
          locator: CBDB:201147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201147）
          source: &a1
            id: s_6gFZc5W4zM81hVbdnHGmZR
            source_type: api_record
            title: 中国历代人物传记资料库：王鍭（CBDB 201147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201147&o=json
            external_identifier: CBDB:201147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GorC87GqUJ8K2xqxjuG7GJ
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1465年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k8QQ6Qfxet1G6Jd1BRx3nH
          claim_id: c_GorC87GqUJ8K2xqxjuG7GJ
          source_id: s_6gFZc5W4zM81hVbdnHGmZR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QQYruaPUBSV3g5y8pVGmDG
        subject_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
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
        - id: cs_TSzHCEoT23jQd8NotAUgw9
          claim_id: c_QQYruaPUBSV3g5y8pVGmDG
          source_id: s_6gFZc5W4zM81hVbdnHGmZR
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
  spouses: []
  ancestors:
    - claim:
        id: c_iz4qnnmWPRJMbHn8S5sE-u
        subject_person_id: p_6SkRzPvYC49deJJ5756Tsc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZovQZ4wojWUMm881WczAtq
          claim_id: c_iz4qnnmWPRJMbHn8S5sE-u
          source_id: s_vENKVDFY5eKBocjy3WM7Dj
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vENKVDFY5eKBocjy3WM7Dj
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 267886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267886&o=json
            external_identifier: CBDB:267886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6SkRzPvYC49deJJ5756Tsc
        status: active
        display_name: 王璋
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鍭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍭 | accepted |
| birth.date | 1465年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6SkRzPvYC49deJJ5756Tsc | 王璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍭（CBDB 201147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201147&o=json)
- [中国历代人物传记资料库：王璋（CBDB 267886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267886&o=json)
