---
schema: wang-person/v1
id: p_RtS92sLBEo6gR6XJY1MDoi
status: active
merged_into: null
display_name: 王學曾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NnFqxM1er5njnXCPignhvA
        subject_person_id: p_RtS92sLBEo6gR6XJY1MDoi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RV24R2G6ddG4NumQj7rbLo
          claim_id: c_NnFqxM1er5njnXCPignhvA
          source_id: s_NKWXkFvw7iJZ24D5TFELB1
          stance: supports
          locator: CBDB:126839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126839）
          source: &a1
            id: s_NKWXkFvw7iJZ24D5TFELB1
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 126839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126839&o=json
            external_identifier: CBDB:126839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.252Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rj96GbYeFxviHXJd2sj529
        subject_person_id: p_RtS92sLBEo6gR6XJY1MDoi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學曾，明人物。籍贯南海，身份为削籍官員，入仕進士，曾任道監察御史、刑部貴州司主事、州判官。（中国历代人物传记资料库 CBDB 126839）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Um38DTpxtgrXSqua_o4njM
          claim_id: c_Rj96GbYeFxviHXJd2sj529
          source_id: s_NKWXkFvw7iJZ24D5TFELB1
          stance: supports
          locator: CBDB:126839
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
  spouses:
    - claim:
        id: c_-bORzLj_CQTGuZYs054ZEZ
        subject_person_id: p_RtS92sLBEo6gR6XJY1MDoi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZP9EGbM82VS6z3Pu3PBSMZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z6jNMMWNw3-k0_BSk0-7R2
          claim_id: c_-bORzLj_CQTGuZYs054ZEZ
          source_id: s_LY_B-x1-cxy6yy_tEf5IH4
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LY_B-x1-cxy6yy_tEf5IH4
            source_type: api_record
            title: 中国历代人物传记资料库：孔氏(黃學曾妻)（CBDB 217286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217286&o=json
            external_identifier: CBDB:217286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZP9EGbM82VS6z3Pu3PBSMZ
        status: active
        display_name: 孔氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王學曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學曾 | accepted |
| bio.summary | 王學曾，明人物。籍贯南海，身份为削籍官員，入仕進士，曾任道監察御史、刑部貴州司主事、州判官。（中国历代人物传记资料库 CBDB 126839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ZP9EGbM82VS6z3Pu3PBSMZ | 孔氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孔氏(黃學曾妻)（CBDB 217286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217286&o=json)
- [中国历代人物传记资料库：王學曾（CBDB 126839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126839&o=json)
