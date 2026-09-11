---
schema: wang-person/v1
id: p_fRAzL4ApNNZCFckyCVpB9u
status: active
merged_into: null
display_name: 王立誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5D8g5Rwkh22Sjr6rmwovDK
        subject_person_id: p_fRAzL4ApNNZCFckyCVpB9u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Ls4swfVSV5x7efvgESvec
          claim_id: c_5D8g5Rwkh22Sjr6rmwovDK
          source_id: s_dwPEeECEogUePtjAgMJSQu
          stance: supports
          locator: CBDB:526930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526930）
          source: &a1
            id: s_dwPEeECEogUePtjAgMJSQu
            source_type: api_record
            title: 中国历代人物传记资料库：王立誠（CBDB 526930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526930&o=json
            external_identifier: CBDB:526930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y15qDw8tTBquzdDG42NcGo
        subject_person_id: p_fRAzL4ApNNZCFckyCVpB9u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NVjGP3JGnFJgksSVpfKVrM
          claim_id: c_Y15qDw8tTBquzdDG42NcGo
          source_id: s_dwPEeECEogUePtjAgMJSQu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DXgPFpGp3jHMqR41o1h8s-
        subject_person_id: p_fRAzL4ApNNZCFckyCVpB9u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LIFlxerzJgd0jmlkAUthq
          claim_id: c_DXgPFpGp3jHMqR41o1h8s-
          source_id: s_dwPEeECEogUePtjAgMJSQu
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13096：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHYbJsS7LE12BDd6qGrWUt
        status: active
        display_name: 王蒔蘭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王立誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立誠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DHYbJsS7LE12BDd6qGrWUt | 王蒔蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立誠（CBDB 526930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526930&o=json)
