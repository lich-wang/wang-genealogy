---
schema: wang-person/v1
id: p_o6NJCbdVfAes5uyoP8PCfZ
status: active
merged_into: null
display_name: 王守道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSAhCAr2JNBV1K4QQ1SZda
        subject_person_id: p_o6NJCbdVfAes5uyoP8PCfZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vmmX29h9tNUNneheX2nS1p
          claim_id: c_BSAhCAr2JNBV1K4QQ1SZda
          source_id: s_VzcV4xtvB3a2yz9VgrM43x
          stance: supports
          locator: CBDB:119743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119743）
          source: &a1
            id: s_VzcV4xtvB3a2yz9VgrM43x
            source_type: api_record
            title: 中国历代人物传记资料库：王守道（CBDB 119743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119743&o=json
            external_identifier: CBDB:119743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c6VdaQXZ5sB2hpsgAzH6Ts
        subject_person_id: p_o6NJCbdVfAes5uyoP8PCfZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXSV82Z3hAJK6DZrNHbBy5
          claim_id: c_c6VdaQXZ5sB2hpsgAzH6Ts
          source_id: s_VzcV4xtvB3a2yz9VgrM43x
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9WRF1O2xyCXOP9n0dvyOM6
        subject_person_id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o6NJCbdVfAes5uyoP8PCfZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__VQVL34iHvu-etplPPjY-I
          claim_id: c_9WRF1O2xyCXOP9n0dvyOM6
          source_id: s_VzcV4xtvB3a2yz9VgrM43x
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ca3HVLeA27vo1Jq5CxZ5ag
        status: active
        display_name: 王繼先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守道 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ca3HVLeA27vo1Jq5CxZ5ag | 王繼先 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守道（CBDB 119743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119743&o=json)
