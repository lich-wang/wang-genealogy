---
schema: wang-person/v1
id: p_kuomB9GNqzmxZdNiXdkRAJ
status: active
merged_into: null
display_name: 王言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_89UsbyuFhVXGUbRMX4pkiq
        subject_person_id: p_kuomB9GNqzmxZdNiXdkRAJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TRSLT51oi83JRtt3j4yTDh
          claim_id: c_89UsbyuFhVXGUbRMX4pkiq
          source_id: s_LFVCieC89oQnbWTFhDndT6
          stance: supports
          locator: CBDB:26609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26609）
          source: &a1
            id: s_LFVCieC89oQnbWTFhDndT6
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 26609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26609&o=json
            external_identifier: CBDB:26609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RXsmcQ422g7wmu7U8uuDhs
        subject_person_id: p_kuomB9GNqzmxZdNiXdkRAJ
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
        - id: cs_XyFAFsVFMTdgt6idTGEfX6
          claim_id: c_RXsmcQ422g7wmu7U8uuDhs
          source_id: s_LFVCieC89oQnbWTFhDndT6
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
        id: c_S8IgbxgKKw3YLcSjfTNA9U
        subject_person_id: p_pVB1ezeHLQfgtGjDJZv1ot
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kuomB9GNqzmxZdNiXdkRAJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y9a7mqeyK8I0iVqbCfme53
          claim_id: c_S8IgbxgKKw3YLcSjfTNA9U
          source_id: s_LFVCieC89oQnbWTFhDndT6
          stance: supports
          locator: CBDB 双向互证（父 王敏 ⇄ 子 王言）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_pVB1ezeHLQfgtGjDJZv1ot
        status: active
        display_name: 王敏
        merged_into_person_id: null
  children:
    - claim:
        id: c_7JDY2wfrVcRv5esZJJBYQu
        subject_person_id: p_kuomB9GNqzmxZdNiXdkRAJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BxVQChzbJa8u9Vm5XHoDpw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XPQmYoYrJ8qJv6an3OswHx
          claim_id: c_7JDY2wfrVcRv5esZJJBYQu
          source_id: s_7zo4774w8QAmSiH1s1VitC
          stance: supports
          locator: CBDB 双向互证（父 王言 ⇄ 子 王介）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7zo4774w8QAmSiH1s1VitC
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 26610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26610&o=json
            external_identifier: CBDB:26610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxVQChzbJa8u9Vm5XHoDpw
        status: active
        display_name: 王介
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pVB1ezeHLQfgtGjDJZv1ot | 王敏 | accepted |
| children | p_BxVQChzbJa8u9Vm5XHoDpw | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王介（CBDB 26610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26610&o=json)
- [中国历代人物传记资料库：王言（CBDB 26609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26609&o=json)
