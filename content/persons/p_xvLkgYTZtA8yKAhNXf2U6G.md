---
schema: wang-person/v1
id: p_xvLkgYTZtA8yKAhNXf2U6G
status: active
merged_into: null
display_name: 王耀宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GvLKnTfCTHvH1DpLwF67Qu
        subject_person_id: p_xvLkgYTZtA8yKAhNXf2U6G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5L99Jd3BKK9zkxnsJjUfsM
          claim_id: c_GvLKnTfCTHvH1DpLwF67Qu
          source_id: s_Y3HruKyaPxRzCcqCnyrACQ
          stance: supports
          locator: CBDB:639913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639913）
          source: &a1
            id: s_Y3HruKyaPxRzCcqCnyrACQ
            source_type: api_record
            title: 中国历代人物传记资料库：王耀宗（CBDB 639913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639913&o=json
            external_identifier: CBDB:639913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YyZZCtGqNCueZx2Cb1wkBC
        subject_person_id: p_xvLkgYTZtA8yKAhNXf2U6G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀宗，清人物。籍贯定遠，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639913）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7PQP1O8Q_pbFskL6ulZLhG
          claim_id: c_YyZZCtGqNCueZx2Cb1wkBC
          source_id: s_Y3HruKyaPxRzCcqCnyrACQ
          stance: supports
          locator: CBDB:639913
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

# 王耀宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀宗 | accepted |
| bio.summary | 王耀宗，清人物。籍贯定遠，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639913） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀宗（CBDB 639913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639913&o=json)
