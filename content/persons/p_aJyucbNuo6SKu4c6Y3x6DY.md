---
schema: wang-person/v1
id: p_aJyucbNuo6SKu4c6Y3x6DY
status: active
merged_into: null
display_name: 王昭遠
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u4gZ6KD3NuU2tr83CPGdxm
        subject_person_id: p_aJyucbNuo6SKu4c6Y3x6DY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yRXdMcdwfv8Y9ekJHxSxgR
          claim_id: c_u4gZ6KD3NuU2tr83CPGdxm
          source_id: s_cKy5x43g5JA2Y61AQNP51F
          stance: supports
          locator: CBDB:37682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37682）
          source: &a1
            id: s_cKy5x43g5JA2Y61AQNP51F
            source_type: api_record
            title: 中国历代人物传记资料库：王昭遠（CBDB 37682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37682&o=json
            external_identifier: CBDB:37682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rKpj9e4HhYNLvrBMA3fpkX
        subject_person_id: p_aJyucbNuo6SKu4c6Y3x6DY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 975年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sH8ae5s6xnJbYkmDPcBg8B
          claim_id: c_rKpj9e4HhYNLvrBMA3fpkX
          source_id: s_cKy5x43g5JA2Y61AQNP51F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S61PNjZ1ZSKuApDw8rnFzU
        subject_person_id: p_aJyucbNuo6SKu4c6Y3x6DY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭遠（卒于975年），五代人物。籍贯成都，身份为武將，曾任節度使、同中書門下平章事、左領軍衛大將軍。（中国历代人物传记资料库 CBDB 37682）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oBZwd9MBNdMhOeJu_woBQq
          claim_id: c_S61PNjZ1ZSKuApDw8rnFzU
          source_id: s_cKy5x43g5JA2Y61AQNP51F
          stance: supports
          locator: CBDB:37682
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VyuJ5xZW2Cdr9i0nJ8n5Hp
        subject_person_id: p_KdcqPruLqAjHwvyr7gXGsW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJyucbNuo6SKu4c6Y3x6DY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_oeS9wxJgwsxxdQpwGqn7
          claim_id: c_VyuJ5xZW2Cdr9i0nJ8n5Hp
          source_id: s_cKy5x43g5JA2Y61AQNP51F
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KdcqPruLqAjHwvyr7gXGsW
        status: active
        display_name: 王繼昇
        merged_into_person_id: null
  children:
    - claim:
        id: c_iXl4USocAHz8XyhCP2fMKC
        subject_person_id: p_aJyucbNuo6SKu4c6Y3x6DY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5FaPNgYpE7U714Zubq7h99
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl7haNyLMHozKtRERipA7t
          claim_id: c_iXl4USocAHz8XyhCP2fMKC
          source_id: s_arzVGif6nqPr9g8jo1NDtL
          stance: supports
          locator: 宋人傳記資料索引(電子版)，2068：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_arzVGif6nqPr9g8jo1NDtL
            source_type: api_record
            title: 中国历代人物传记资料库：王懷英（CBDB 21987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21987&o=json
            external_identifier: CBDB:21987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5FaPNgYpE7U714Zubq7h99
        status: active
        display_name: 王懷英
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭遠 | accepted |
| death.date | 975年 | accepted |
| bio.summary | 王昭遠（卒于975年），五代人物。籍贯成都，身份为武將，曾任節度使、同中書門下平章事、左領軍衛大將軍。（中国历代人物传记资料库 CBDB 37682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KdcqPruLqAjHwvyr7gXGsW | 王繼昇 | accepted |
| children | p_5FaPNgYpE7U714Zubq7h99 | 王懷英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷英（CBDB 21987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21987&o=json)
- [中国历代人物传记资料库：王昭遠（CBDB 37682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37682&o=json)
