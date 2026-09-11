---
schema: wang-person/v1
id: p_2njDB7hmvoYHNUkzktGMvR
status: active
merged_into: null
display_name: 王梁
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hcE8VgJ1wGJqNL76QouzMB
        subject_person_id: p_2njDB7hmvoYHNUkzktGMvR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VfK5ST25GsEXuir631jTRx
          claim_id: c_hcE8VgJ1wGJqNL76QouzMB
          source_id: s_oWeMCHNTPW6dGTHrddGAo7
          stance: supports
          locator: CBDB:230036
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230036）
          source: &a1
            id: s_oWeMCHNTPW6dGTHrddGAo7
            source_type: api_record
            title: 中国历代人物传记资料库：王梁（CBDB 230036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230036&o=json
            external_identifier: CBDB:230036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jb9e21bB2if91zdoiphSaD
        subject_person_id: p_2njDB7hmvoYHNUkzktGMvR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梁，明人物。萬曆丙戌科進士進士，籍贯安州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 230036）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mUpy2-5yRyY7yIpJ4y0rIi
          claim_id: c_Jb9e21bB2if91zdoiphSaD
          source_id: s_oWeMCHNTPW6dGTHrddGAo7
          stance: supports
          locator: CBDB:230036
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_A_lsT5Gcc6Wd9tpKYJKGGn
        subject_person_id: p_2njDB7hmvoYHNUkzktGMvR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E9W2DShq5Qkj6ZiKVB1xLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hmVEFN5U6-r8jN4kxPBQ5D
          claim_id: c_A_lsT5Gcc6Wd9tpKYJKGGn
          source_id: s_oWeMCHNTPW6dGTHrddGAo7
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E9W2DShq5Qkj6ZiKVB1xLN
        status: active
        display_name: 王德完
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王梁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梁 | accepted |
| bio.summary | 王梁，明人物。萬曆丙戌科進士進士，籍贯安州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 230036） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_E9W2DShq5Qkj6ZiKVB1xLN | 王德完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梁（CBDB 230036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230036&o=json)
