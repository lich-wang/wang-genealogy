---
schema: wang-person/v1
id: p_o5zbhk9zqoTnVZKCQ6tg1P
status: active
merged_into: null
display_name: 王大賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aHNwY1y67FMNsEi9Vu2tqV
        subject_person_id: p_o5zbhk9zqoTnVZKCQ6tg1P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VqBABnPQzJ8gFKrRry9G28
          claim_id: c_aHNwY1y67FMNsEi9Vu2tqV
          source_id: s_5QEQuJBPLhSn5tbF2espRF
          stance: supports
          locator: CBDB:699718
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699718）
          source: &a1
            id: s_5QEQuJBPLhSn5tbF2espRF
            source_type: api_record
            title: 中国历代人物传记资料库：王大賓（CBDB 699718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699718&o=json
            external_identifier: CBDB:699718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dQPbovyf8jA5aE1KgY1pVL
        subject_person_id: p_o5zbhk9zqoTnVZKCQ6tg1P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大賓，清人物。籍贯仙居，身份为為善鄉里，入仕監生。（中国历代人物传记资料库 CBDB 699718）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MkmEzw5QdazXPZJG5oyMtR
          claim_id: c_dQPbovyf8jA5aE1KgY1pVL
          source_id: s_5QEQuJBPLhSn5tbF2espRF
          stance: supports
          locator: CBDB:699718
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rX9hX8lmu9uwERj6MfYbAd
        subject_person_id: p_o5zbhk9zqoTnVZKCQ6tg1P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6R4YTzy4gN7ktu6qi2jm97
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q5c82Tx9IpCVCd6b48ewhw
          claim_id: c_rX9hX8lmu9uwERj6MfYbAd
          source_id: s_EMM82r7fWFtBvGGWTm2A5g
          stance: supports
          locator: 仙居志，lgid=356680：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EMM82r7fWFtBvGGWTm2A5g
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 696705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696705&o=json
            external_identifier: CBDB:696705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6R4YTzy4gN7ktu6qi2jm97
        status: active
        display_name: 王翰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大賓 | accepted |
| bio.summary | 王大賓，清人物。籍贯仙居，身份为為善鄉里，入仕監生。（中国历代人物传记资料库 CBDB 699718） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6R4YTzy4gN7ktu6qi2jm97 | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大賓（CBDB 699718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699718&o=json)
- [中国历代人物传记资料库：王翰（CBDB 696705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696705&o=json)
