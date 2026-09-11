---
schema: wang-person/v1
id: p_i1C3uJJYfYMw3861gcKMoP
status: active
merged_into: null
display_name: 王之寀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MTT9JyQa2bFVvPjx2JJva9
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之寀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Heb9WXc1cgV4CnCKBDJK2S
          claim_id: c_MTT9JyQa2bFVvPjx2JJva9
          source_id: s_MusunsTMcJ8i4AepqBvGHy
          stance: supports
          locator: CBDB:65713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65713）
          source: &a1
            id: s_MusunsTMcJ8i4AepqBvGHy
            source_type: api_record
            title: 中国历代人物传记资料库：王之寀（CBDB 65713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65713&o=json
            external_identifier: CBDB:65713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_F69n9nmRi9QPC27GAfifdz
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1627年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C17S7DhKB3CySR3BZQALgY
          claim_id: c_F69n9nmRi9QPC27GAfifdz
          source_id: s_MusunsTMcJ8i4AepqBvGHy
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
        id: c_9NhiT6jib3Dn7U3DN1KMUD
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之寀（卒于1627年），明人物。籍贯朝邑，入仕進士，曾任尚寶司少卿、太僕寺卿、太僕寺少卿。（中国历代人物传记资料库 CBDB 65713）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pWZJgU9mCUqeQ8y5O-0sbh
          claim_id: c_9NhiT6jib3Dn7U3DN1KMUD
          source_id: s_MusunsTMcJ8i4AepqBvGHy
          stance: supports
          locator: CBDB:65713
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xJGYkLrkvU2qRbtMm0aV6U
        subject_person_id: p_i1C3uJJYfYMw3861gcKMoP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QqmW4LbV4TtYFNgQc248uD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pMvBfbWJQe3Qj-xSCpEvxL
          claim_id: c_xJGYkLrkvU2qRbtMm0aV6U
          source_id: s_MusunsTMcJ8i4AepqBvGHy
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9155：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QqmW4LbV4TtYFNgQc248uD
        status: active
        display_name: 王建斗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之寀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之寀 | accepted |
| death.date | 1627年 | accepted |
| bio.summary | 王之寀（卒于1627年），明人物。籍贯朝邑，入仕進士，曾任尚寶司少卿、太僕寺卿、太僕寺少卿。（中国历代人物传记资料库 CBDB 65713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QqmW4LbV4TtYFNgQc248uD | 王建斗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之寀（CBDB 65713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65713&o=json)
