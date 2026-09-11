---
schema: wang-person/v1
id: p_ZV784JACQgpPqfwHkB9fXJ
status: active
merged_into: null
display_name: 王顯名
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y327hKMnyp3vQd7JvPE4r4
        subject_person_id: p_ZV784JACQgpPqfwHkB9fXJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RbdHFAND5gH1VQ5vDs5KWZ
          claim_id: c_y327hKMnyp3vQd7JvPE4r4
          source_id: s_3ruAat447qZa19kDAw3NEG
          stance: supports
          locator: CBDB:343505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343505）
          source: &a1
            id: s_3ruAat447qZa19kDAw3NEG
            source_type: api_record
            title: 中国历代人物传记资料库：王顯名（CBDB 343505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343505&o=json
            external_identifier: CBDB:343505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DSFxT8q9dJpd5g7yvH1CB8
        subject_person_id: p_ZV784JACQgpPqfwHkB9fXJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯名，明人物。明清進士進士，籍贯遼州，入仕進士。（中国历代人物传记资料库 CBDB 343505）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fYsrdIzNeomhqnHospoH3h
          claim_id: c_DSFxT8q9dJpd5g7yvH1CB8
          source_id: s_3ruAat447qZa19kDAw3NEG
          stance: supports
          locator: CBDB:343505
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

# 王顯名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯名 | accepted |
| bio.summary | 王顯名，明人物。明清進士進士，籍贯遼州，入仕進士。（中国历代人物传记资料库 CBDB 343505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯名（CBDB 343505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343505&o=json)
