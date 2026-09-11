---
schema: wang-person/v1
id: p_GwTwAk8kgcw8JiRbnA9GB3
status: active
merged_into: null
display_name: 王秉彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pWfeA5jARcrAR4oeYkPPjs
        subject_person_id: p_GwTwAk8kgcw8JiRbnA9GB3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jfzJu4YCnuCPTuvLm8aLjj
          claim_id: c_pWfeA5jARcrAR4oeYkPPjs
          source_id: s_i41sQFsmFPaCrSHhW1WJPp
          stance: supports
          locator: CBDB:272756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272756）
          source: &a1
            id: s_i41sQFsmFPaCrSHhW1WJPp
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 272756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json
            external_identifier: CBDB:272756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_teqzn9PqcsrKzG74p72GFi
        subject_person_id: p_GwTwAk8kgcw8JiRbnA9GB3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝，明人物。弘治十八年進士，籍贯西充。（中国历代人物传记资料库 CBDB 272756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rVUabphHuHM7Yo1kFW6wiU
          claim_id: c_teqzn9PqcsrKzG74p72GFi
          source_id: s_i41sQFsmFPaCrSHhW1WJPp
          stance: supports
          locator: CBDB:272756
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

# 王秉彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉彝 | accepted |
| bio.summary | 王秉彝，明人物。弘治十八年進士，籍贯西充。（中国历代人物传记资料库 CBDB 272756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉彝（CBDB 272756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json)
