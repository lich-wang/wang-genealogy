---
schema: wang-person/v1
id: p_XQD6YTcmUp8iw8hEQgNgEp
status: active
merged_into: null
display_name: 王槐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sQxuEcGt53XXQ6FGrnxhgs
        subject_person_id: p_XQD6YTcmUp8iw8hEQgNgEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ac9DeGdjQHwvBNf983JtKR
          claim_id: c_sQxuEcGt53XXQ6FGrnxhgs
          source_id: s_HFUpDrRwsQv2xN5GuqgZBs
          stance: supports
          locator: CBDB:37932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37932）
          source: &a1
            id: s_HFUpDrRwsQv2xN5GuqgZBs
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 37932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37932&o=json
            external_identifier: CBDB:37932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bxXig63WUMenVGKEnjfUKE
        subject_person_id: p_XQD6YTcmUp8iw8hEQgNgEp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐，宋人物。籍贯金華，曾任朝請大夫、大理寺丞。（中国历代人物传记资料库 CBDB 37932）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1ZXeVi2eavrqfSVZcVOLaF
          claim_id: c_bxXig63WUMenVGKEnjfUKE
          source_id: s_HFUpDrRwsQv2xN5GuqgZBs
          stance: supports
          locator: CBDB:37932
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
  ancestors: []
  descendants:
    - claim:
        id: c_Kye7Asqoe0Fi-wqOMYn-to
        subject_person_id: p_XQD6YTcmUp8iw8hEQgNgEp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sEGDXi7ck4pKNAhddgmbiq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Mq2-gh5ugEldfLaeLomLe
          claim_id: c_Kye7Asqoe0Fi-wqOMYn-to
          source_id: s_t2VA7WS1nJbLWR9WK7ND6Q
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t2VA7WS1nJbLWR9WK7ND6Q
            source_type: api_record
            title: 中国历代人物传记资料库：王珹（CBDB 37927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json
            external_identifier: CBDB:37927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sEGDXi7ck4pKNAhddgmbiq
        status: active
        display_name: 王珹
        merged_into_person_id: null
  other: []
---

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| bio.summary | 王槐，宋人物。籍贯金華，曾任朝請大夫、大理寺丞。（中国历代人物传记资料库 CBDB 37932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sEGDXi7ck4pKNAhddgmbiq | 王珹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珹（CBDB 37927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37927&o=json)
- [中国历代人物传记资料库：王槐（CBDB 37932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37932&o=json)
