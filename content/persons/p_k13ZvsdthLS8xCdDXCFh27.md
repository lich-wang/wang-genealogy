---
schema: wang-person/v1
id: p_k13ZvsdthLS8xCdDXCFh27
status: active
merged_into: null
display_name: 王善壁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UmeVHFLNW1Gctr7bW4djng
        subject_person_id: p_k13ZvsdthLS8xCdDXCFh27
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王善壁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vXUuWsAs541SJsTe1X1WLB
          claim_id: c_UmeVHFLNW1Gctr7bW4djng
          source_id: s_ob5JE2CkE6ZxsAjGn8awiN
          stance: supports
          locator: CBDB:72086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72086）
          source: &a1
            id: s_ob5JE2CkE6ZxsAjGn8awiN
            source_type: api_record
            title: 中国历代人物传记资料库：王善壁（CBDB 72086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72086&o=json
            external_identifier: CBDB:72086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MBFUNKDZkWTcGjNJDNe5p5
        subject_person_id: p_k13ZvsdthLS8xCdDXCFh27
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1764年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GfNQeMWoufPoTrGTxoyHJv
          claim_id: c_MBFUNKDZkWTcGjNJDNe5p5
          source_id: s_ob5JE2CkE6ZxsAjGn8awiN
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
        id: c_ziuhHCBxTh7YwcMsmEQeM1
        subject_person_id: p_k13ZvsdthLS8xCdDXCFh27
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
        - id: cs_WP1djqSMCAk4J6bAaKWHcx
          claim_id: c_ziuhHCBxTh7YwcMsmEQeM1
          source_id: s_ob5JE2CkE6ZxsAjGn8awiN
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
  ancestors: []
  descendants: []
  other: []
---

# 王善壁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王善壁 | accepted |
| birth.date | 1764年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王善壁（CBDB 72086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72086&o=json)
