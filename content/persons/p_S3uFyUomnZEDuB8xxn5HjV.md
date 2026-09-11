---
schema: wang-person/v1
id: p_S3uFyUomnZEDuB8xxn5HjV
status: active
merged_into: null
display_name: 王秉鈴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fgQdKppNW63TVNv5fCgRqj
        subject_person_id: p_S3uFyUomnZEDuB8xxn5HjV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉鈴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yFWcvCQxgemh4hxUG36cnU
          claim_id: c_fgQdKppNW63TVNv5fCgRqj
          source_id: s_1VBGxFYs9WCfqJ1Ls7wWuB
          stance: supports
          locator: CBDB:639660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639660）
          source: &a1
            id: s_1VBGxFYs9WCfqJ1Ls7wWuB
            source_type: api_record
            title: 中国历代人物传记资料库：王秉鈴（CBDB 639660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639660&o=json
            external_identifier: CBDB:639660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.007Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7psQ1vYXFSRbydDryMuvH1
        subject_person_id: p_S3uFyUomnZEDuB8xxn5HjV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉鈴，清人物。籍贯嘉善，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rc6sng458Vmg3qmegqw6e5
          claim_id: c_7psQ1vYXFSRbydDryMuvH1
          source_id: s_1VBGxFYs9WCfqJ1Ls7wWuB
          stance: supports
          locator: CBDB:639660
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

# 王秉鈴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉鈴 | accepted |
| bio.summary | 王秉鈴，清人物。籍贯嘉善，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉鈴（CBDB 639660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639660&o=json)
