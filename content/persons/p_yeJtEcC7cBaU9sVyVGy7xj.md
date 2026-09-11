---
schema: wang-person/v1
id: p_yeJtEcC7cBaU9sVyVGy7xj
status: active
merged_into: null
display_name: 王鉞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPAqLvJy3QY2BQ48gNZV5B
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oe4ZkuhN1a8WkT7V23933L
          claim_id: c_aPAqLvJy3QY2BQ48gNZV5B
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: CBDB:285846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285846）
          source: &a1
            id: s_Qd3RrwisKBNCET2WYrdjmq
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 285846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json
            external_identifier: CBDB:285846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rsdGWcPrhF8UPsWy96mLQi
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cOurcrucWEVnw3CgG-uLYc
          claim_id: c_rsdGWcPrhF8UPsWy96mLQi
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: CBDB:285846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2iQ3b3s1ay1zNvclxECBif
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zKXwMlGUHr0LkSWhFomm6v
          claim_id: c_2iQ3b3s1ay1zNvclxECBif
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 285846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json)
