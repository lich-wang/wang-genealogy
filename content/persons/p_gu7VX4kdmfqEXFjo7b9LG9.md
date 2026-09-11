---
schema: wang-person/v1
id: p_gu7VX4kdmfqEXFjo7b9LG9
status: active
merged_into: null
display_name: 王定臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JuidNuxZRxjh677gvviLgA
        subject_person_id: p_gu7VX4kdmfqEXFjo7b9LG9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4J8mKpn69ysnrHCpr5jnf4
          claim_id: c_JuidNuxZRxjh677gvviLgA
          source_id: s_tXuysyovDKAPDwDQ8q6FZW
          stance: supports
          locator: CBDB:3983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3983）
          source: &a1
            id: s_tXuysyovDKAPDwDQ8q6FZW
            source_type: api_record
            title: 中国历代人物传记资料库：王定臣（CBDB 3983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3983&o=json
            external_identifier: CBDB:3983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ogHBJN9SBg3X4cqDs6g8yp
        subject_person_id: p_gu7VX4kdmfqEXFjo7b9LG9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定臣，宋人物。籍贯虞城。（中国历代人物传记资料库 CBDB 3983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NKZDgnCWSHIYT_nL2THzEq
          claim_id: c_ogHBJN9SBg3X4cqDs6g8yp
          source_id: s_tXuysyovDKAPDwDQ8q6FZW
          stance: supports
          locator: CBDB:3983
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
  ancestors:
    - claim:
        id: c_NStg2OZeVA08MYm3FjmZTO
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gu7VX4kdmfqEXFjo7b9LG9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNryxV5NH3bwv4_vlq1Um_
          claim_id: c_NStg2OZeVA08MYm3FjmZTO
          source_id: s_tXuysyovDKAPDwDQ8q6FZW
          stance: supports
          locator: CBDB 双向互证（祖父 王礪 ⇄ 孫 王定臣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VKst8B2d5tWwdYZpMbjXpF
        status: active
        display_name: 王砺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王定臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定臣 | accepted |
| bio.summary | 王定臣，宋人物。籍贯虞城。（中国历代人物传记资料库 CBDB 3983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_VKst8B2d5tWwdYZpMbjXpF | 王砺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定臣（CBDB 3983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3983&o=json)
