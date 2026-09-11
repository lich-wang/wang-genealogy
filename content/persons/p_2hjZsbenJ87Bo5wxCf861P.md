---
schema: wang-person/v1
id: p_2hjZsbenJ87Bo5wxCf861P
status: active
merged_into: null
display_name: 王原吉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2VoUQM6EY3NC3L2u5MaMms
        subject_person_id: p_2hjZsbenJ87Bo5wxCf861P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PfHg8UeCM92gTwxARQLG7D
          claim_id: c_2VoUQM6EY3NC3L2u5MaMms
          source_id: s_oL5csJSw2bgBCPoxoaRmFd
          stance: supports
          locator: CBDB:279499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279499）
          source: &a1
            id: s_oL5csJSw2bgBCPoxoaRmFd
            source_type: api_record
            title: 中国历代人物传记资料库：王原吉（CBDB 279499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json
            external_identifier: CBDB:279499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bni9vcMZUn7RE1JwjEUbJo
        subject_person_id: p_2hjZsbenJ87Bo5wxCf861P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原吉，明人物。正德十二年進士，籍贯常熟，曾任義官。（中国历代人物传记资料库 CBDB 279499）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DQ1a0jZZdwKoNOtEk_HvdY
          claim_id: c_Bni9vcMZUn7RE1JwjEUbJo
          source_id: s_oL5csJSw2bgBCPoxoaRmFd
          stance: supports
          locator: CBDB:279499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vf8nQqGX2Y35GjzNxv3usf
        subject_person_id: p_2hjZsbenJ87Bo5wxCf861P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZBFmhgXee6lMViC030OH9j
          claim_id: c_vf8nQqGX2Y35GjzNxv3usf
          source_id: s_oL5csJSw2bgBCPoxoaRmFd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nMT35SUBP5kHgrMqnHEGVw
        status: active
        display_name: 王舜耕
        merged_into_person_id: null
    - claim:
        id: c_DnpnUifP3kO4Plp7UHBD1x
        subject_person_id: p_2hjZsbenJ87Bo5wxCf861P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_neZGHyEuAgnr3hzP3cHchk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mqy1qB2fFzXIRdt19x0tBa
          claim_id: c_DnpnUifP3kO4Plp7UHBD1x
          source_id: s_oL5csJSw2bgBCPoxoaRmFd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_neZGHyEuAgnr3hzP3cHchk
        status: active
        display_name: 王舜漁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王原吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王原吉 | accepted |
| bio.summary | 王原吉，明人物。正德十二年進士，籍贯常熟，曾任義官。（中国历代人物传记资料库 CBDB 279499） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nMT35SUBP5kHgrMqnHEGVw | 王舜耕 | accepted |
| children | p_neZGHyEuAgnr3hzP3cHchk | 王舜漁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王原吉（CBDB 279499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json)
