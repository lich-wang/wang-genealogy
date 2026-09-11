---
schema: wang-person/v1
id: p_7mwPBdQXGKPxkFtHpNjRpF
status: active
merged_into: null
display_name: 王應泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PRuW9SwTjynbtd7Y6zWgsN
        subject_person_id: p_7mwPBdQXGKPxkFtHpNjRpF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ckHtgLBM9TiyU3CeQDiQDM
          claim_id: c_PRuW9SwTjynbtd7Y6zWgsN
          source_id: s_Rah1ZDAVPu44J8KpXKhBw3
          stance: supports
          locator: CBDB:513079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（513079）
          source: &a1
            id: s_Rah1ZDAVPu44J8KpXKhBw3
            source_type: api_record
            title: 中国历代人物传记资料库：王應泰（CBDB 513079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513079&o=json
            external_identifier: CBDB:513079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3UEBNdbdLJmDKKoMcK9Ms6
        subject_person_id: p_7mwPBdQXGKPxkFtHpNjRpF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王應泰，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 513079）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Kv1rPsHSeLvhiisEaYW-Cc
          claim_id: c_3UEBNdbdLJmDKKoMcK9Ms6
          source_id: s_Rah1ZDAVPu44J8KpXKhBw3
          stance: supports
          locator: CBDB:513079
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

# 王應泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應泰 | accepted |
| bio.summary | 王應泰，清人物。入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 513079） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應泰（CBDB 513079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513079&o=json)
