---
schema: wang-person/v1
id: p_wmHdEv4uM7frva2zKLBNuz
status: active
merged_into: null
display_name: 王氏
revision: 1
cbdb_id: 556842
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__h797XzES5OeonlKluM7fA
        subject_person_id: p_wmHdEv4uM7frva2zKLBNuz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，明人物。籍贯泌陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zIq3nOAflZLkw5N_dp0Pdz
          claim_id: c__h797XzES5OeonlKluM7fA
          source_id: s_iN1-hwgP3DqT7p_N37jn6M
          stance: supports
          locator: CBDB:556842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iN1-hwgP3DqT7p_N37jn6M
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(王繼文妻)（CBDB 556842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556842&o=json
            external_identifier: CBDB:556842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2ok8jUBhwyhlUpW3NuFo6
        subject_person_id: p_wmHdEv4uM7frva2zKLBNuz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YvvsKZcvrCsa7KG9yTO94g
          claim_id: c_K2ok8jUBhwyhlUpW3NuFo6
          source_id: s_iN1-hwgP3DqT7p_N37jn6M
          stance: supports
          locator: CBDB:556842
          quotation: null
          interpretation_note: CBDB 明确记录的王繼文配偶
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
        id: c_B4rR6n1mVEcgqZNoSjnxT9
        subject_person_id: p_ypH9atR6w7N2sgLfbc3Qti
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wmHdEv4uM7frva2zKLBNuz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xufivpM3JOS41ucV877psd
          claim_id: c_B4rR6n1mVEcgqZNoSjnxT9
          source_id: s_iN1-hwgP3DqT7p_N37jn6M
          stance: supports
          locator: 南陽府志，lgid=878737：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ypH9atR6w7N2sgLfbc3Qti
        status: active
        display_name: 王繼文
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，明人物。籍贯泌陽，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 556842） | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ypH9atR6w7N2sgLfbc3Qti | 王繼文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王氏(王繼文妻)（CBDB 556842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556842&o=json)
