---
schema: wang-person/v1
id: p_bxhtYQ9E8JH99TgLXQgD1K
status: active
merged_into: null
display_name: 王惟幾
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oQnFEvtWD3FKqqZEMJsVWh
        subject_person_id: p_bxhtYQ9E8JH99TgLXQgD1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟幾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8YsLErMsnzUpK1Re8mWmQF
          claim_id: c_oQnFEvtWD3FKqqZEMJsVWh
          source_id: s_2BQQQuAJbNuujs3BEbjUXw
          stance: supports
          locator: CBDB:294964
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294964）
          source: &a1
            id: s_2BQQQuAJbNuujs3BEbjUXw
            source_type: api_record
            title: 中国历代人物传记资料库：王惟幾（CBDB 294964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294964&o=json
            external_identifier: CBDB:294964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_beQHidTtq12soqRxk34Ufq
        subject_person_id: p_bxhtYQ9E8JH99TgLXQgD1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟幾，明人物。嘉靖十一年進士，籍贯文安，入仕進士，曾任知縣、入名宦祠。（中国历代人物传记资料库 CBDB 294964）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OwTn3d-rhWUdCWnYCybQgA
          claim_id: c_beQHidTtq12soqRxk34Ufq
          source_id: s_2BQQQuAJbNuujs3BEbjUXw
          stance: supports
          locator: CBDB:294964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sTspnGh5ZLmDsH_4kfnhBe
        subject_person_id: p_ShbQcKbhPZJtYL14xZXyTR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bxhtYQ9E8JH99TgLXQgD1K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJEsLo32QiXsfOUNgoqyOL
          claim_id: c_sTspnGh5ZLmDsH_4kfnhBe
          source_id: s_2BQQQuAJbNuujs3BEbjUXw
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ShbQcKbhPZJtYL14xZXyTR
        status: active
        display_name: 王佩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟幾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟幾 | accepted |
| bio.summary | 王惟幾，明人物。嘉靖十一年進士，籍贯文安，入仕進士，曾任知縣、入名宦祠。（中国历代人物传记资料库 CBDB 294964） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ShbQcKbhPZJtYL14xZXyTR | 王佩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟幾（CBDB 294964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294964&o=json)
