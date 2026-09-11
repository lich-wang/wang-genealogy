---
schema: wang-person/v1
id: p_pfcJNc3xZjKYXLQX9D4D99
status: active
merged_into: null
display_name: 王溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_155C6kmGnnZt4MgL3oz5a9
        subject_person_id: p_pfcJNc3xZjKYXLQX9D4D99
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MJxeT9h8Pi19CdCkDc9wYG
          claim_id: c_155C6kmGnnZt4MgL3oz5a9
          source_id: s_7zpNRL1V1mpG4iMPktT7d1
          stance: supports
          locator: CBDB:377658
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377658）
          source: &a1
            id: s_7zpNRL1V1mpG4iMPktT7d1
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 377658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377658&o=json
            external_identifier: CBDB:377658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VRfCvctsicqCKnEYBRjrti
        subject_person_id: p_pfcJNc3xZjKYXLQX9D4D99
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377658）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sn9w42reeCV1Xhm4szpfmO
          claim_id: c_VRfCvctsicqCKnEYBRjrti
          source_id: s_7zpNRL1V1mpG4iMPktT7d1
          stance: supports
          locator: CBDB:377658
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
  descendants: []
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | 王溥，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 377658） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 377658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377658&o=json)
