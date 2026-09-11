---
schema: wang-person/v1
id: p_uK1yvJwZeGhR9M1kpKNBaT
status: active
merged_into: null
display_name: 王晉山
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QAh7odfLysHi6HzL7idtEn
        subject_person_id: p_uK1yvJwZeGhR9M1kpKNBaT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nu59Yt7JTutv6qCNkVUykz
          claim_id: c_QAh7odfLysHi6HzL7idtEn
          source_id: s_WkWuitXupmmRPPqBP8tq9U
          stance: supports
          locator: CBDB:638450
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638450）
          source: &a1
            id: s_WkWuitXupmmRPPqBP8tq9U
            source_type: api_record
            title: 中国历代人物传记资料库：王晉山（CBDB 638450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638450&o=json
            external_identifier: CBDB:638450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QCurbU29KHyTHCwT2mpNAh
        subject_person_id: p_uK1yvJwZeGhR9M1kpKNBaT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉山，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 638450）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pbk4L_X-AdbWVCmZF-3oSz
          claim_id: c_QCurbU29KHyTHCwT2mpNAh
          source_id: s_WkWuitXupmmRPPqBP8tq9U
          stance: supports
          locator: CBDB:638450
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

# 王晉山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉山 | accepted |
| bio.summary | 王晉山，清人物。籍贯宛平，曾任典史。（中国历代人物传记资料库 CBDB 638450） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉山（CBDB 638450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638450&o=json)
