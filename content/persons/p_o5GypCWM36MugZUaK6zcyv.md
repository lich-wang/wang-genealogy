---
schema: wang-person/v1
id: p_o5GypCWM36MugZUaK6zcyv
status: active
merged_into: null
display_name: 王惇信
cbdb_id: 287976
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BMZEYhhsNWpm7mB6RdxGAE
        subject_person_id: p_o5GypCWM36MugZUaK6zcyv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惇信，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 287976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bPjfxhqU3YRG7_gMJH5iC4
          claim_id: c_BMZEYhhsNWpm7mB6RdxGAE
          source_id: s_yjpSEGNz5hu4g6N5yARsVj
          stance: supports
          locator: CBDB:287976
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yjpSEGNz5hu4g6N5yARsVj
            source_type: api_record
            title: 中国历代人物传记资料库：王惇信（CBDB 287976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287976&o=json
            external_identifier: CBDB:287976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rAc85jE2dty28mcZ9ay5ja
        subject_person_id: p_o5GypCWM36MugZUaK6zcyv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惇信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pmDhJZczQ17oz475FtdgL1
          claim_id: c_rAc85jE2dty28mcZ9ay5ja
          source_id: s_yjpSEGNz5hu4g6N5yARsVj
          stance: supports
          locator: CBDB:287976
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_1DjSj6HI9wAY-Ec0-ZGZas
        subject_person_id: p_o5GypCWM36MugZUaK6zcyv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VChMLcAfkWI-kARwe36r3e
          claim_id: c_1DjSj6HI9wAY-Ec0-ZGZas
          source_id: s_yjpSEGNz5hu4g6N5yARsVj
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yjpSEGNz5hu4g6N5yARsVj
            source_type: api_record
            title: 中国历代人物传记资料库：王惇信（CBDB 287976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287976&o=json
            external_identifier: CBDB:287976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tz8uWFvWRBpp9FN5sbMR5o
        status: active
        display_name: 王希文
        merged_into_person_id: null
  other: []
---

# 王惇信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惇信，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 287976） | accepted |
| name.primary | 王惇信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tz8uWFvWRBpp9FN5sbMR5o | 王希文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惇信（CBDB 287976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287976&o=json)
