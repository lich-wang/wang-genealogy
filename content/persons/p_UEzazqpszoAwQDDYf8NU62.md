---
schema: wang-person/v1
id: p_UEzazqpszoAwQDDYf8NU62
status: active
merged_into: null
display_name: 王宗佶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y4vFGLCPptK6Gr5m7TTxga
        subject_person_id: p_UEzazqpszoAwQDDYf8NU62
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rht2iLCqKNCjPa85DQ1X2T
          claim_id: c_Y4vFGLCPptK6Gr5m7TTxga
          source_id: s_GaJYa9HjiMoAG1W5PBrGfv
          stance: supports
          locator: CBDB:383688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（383688）
          source: &a1
            id: s_GaJYa9HjiMoAG1W5PBrGfv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗佶（CBDB 383688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383688&o=json
            external_identifier: CBDB:383688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WkhY6MUAhtTWxEMwS5AqS3
        subject_person_id: p_UEzazqpszoAwQDDYf8NU62
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗佶，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VpCXZBaMdiUtEihgu1Cq4K
          claim_id: c_WkhY6MUAhtTWxEMwS5AqS3
          source_id: s_GaJYa9HjiMoAG1W5PBrGfv
          stance: supports
          locator: CBDB:383688
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

# 王宗佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗佶 | accepted |
| bio.summary | 王宗佶，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 383688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗佶（CBDB 383688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=383688&o=json)
