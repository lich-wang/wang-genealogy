---
schema: wang-person/v1
id: p_5CL4Wu3NXG9SDC4HABb7b5
status: active
merged_into: null
display_name: 王亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JzsgWt3mpMN7HmUBTMvfFD
        subject_person_id: p_5CL4Wu3NXG9SDC4HABb7b5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZHhC2Zv7zvoDzzjeP8UR2C
          claim_id: c_JzsgWt3mpMN7HmUBTMvfFD
          source_id: s_skTNdVPLUGdFN8U8sKShh8
          stance: supports
          locator: CBDB:261998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261998）
          source: &a1
            id: s_skTNdVPLUGdFN8U8sKShh8
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 261998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json
            external_identifier: CBDB:261998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gz9PhoLg452BN32jDihUCg
        subject_person_id: p_5CL4Wu3NXG9SDC4HABb7b5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 261998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TlIXSmP1hmqJDhOKgWQ2ZQ
          claim_id: c_Gz9PhoLg452BN32jDihUCg
          source_id: s_skTNdVPLUGdFN8U8sKShh8
          stance: supports
          locator: CBDB:261998
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

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | 王亨，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 261998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 261998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json)
