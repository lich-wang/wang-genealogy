---
schema: wang-person/v1
id: p_VwzQHupke6i4zHhf3Hgb9p
status: active
merged_into: null
display_name: 王相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w3HvWJt4T6TUMUDiRCVvAJ
        subject_person_id: p_VwzQHupke6i4zHhf3Hgb9p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DyGXqQjZ8HdX3MRJJmrybz
          claim_id: c_w3HvWJt4T6TUMUDiRCVvAJ
          source_id: s_nc66WUoEdyFgEP4DMgph66
          stance: supports
          locator: CBDB:100729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100729）
          source: &a1
            id: s_nc66WUoEdyFgEP4DMgph66
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 100729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100729&o=json
            external_identifier: CBDB:100729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CkN6WuSVGWTXZLFHeRqo6m
        subject_person_id: p_VwzQHupke6i4zHhf3Hgb9p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1296年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AHi6bTGhi62NiH1QF97MZr
          claim_id: c_CkN6WuSVGWTXZLFHeRqo6m
          source_id: s_nc66WUoEdyFgEP4DMgph66
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kc7s8feivQnKYGKWqZB477
        subject_person_id: p_VwzQHupke6i4zHhf3Hgb9p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1361年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q74RRmKDU1fxibHXBBHUHa
          claim_id: c_kc7s8feivQnKYGKWqZB477
          source_id: s_nc66WUoEdyFgEP4DMgph66
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
        id: c_caoVHNEkQmihg9KZGjRgDo
        subject_person_id: p_VwzQHupke6i4zHhf3Hgb9p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相（1296年—1361年），元人物。籍贯吉水州，入仕進士，曾任國子學博士、國子學助教、縣丞。（中国历代人物传记资料库 CBDB 100729）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z-2gIbZE_qJZLK_8HQbSdu
          claim_id: c_caoVHNEkQmihg9KZGjRgDo
          source_id: s_nc66WUoEdyFgEP4DMgph66
          stance: supports
          locator: CBDB:100729
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
  spouses:
    - claim:
        id: c_qRnAvXkLYzV9r0n-kUh2nA
        subject_person_id: p_VwzQHupke6i4zHhf3Hgb9p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bUSu6ZpTQ9eba89jgnT6Nr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tkbxmHjaVdP14aNk60eEaX
          claim_id: c_qRnAvXkLYzV9r0n-kUh2nA
          source_id: s_UjwqKmhbM_wkL4VP9zU_yz
          stance: supports
          locator: 元人傳記資料索引，12330：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UjwqKmhbM_wkL4VP9zU_yz
            source_type: api_record
            title: 中国历代人物传记资料库：潘氏(王相妻)（CBDB 111536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=111536&o=json
            external_identifier: CBDB:111536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bUSu6ZpTQ9eba89jgnT6Nr
        status: active
        display_name: 潘氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| birth.date | 1296年 | accepted |
| death.date | 1361年 | accepted |
| bio.summary | 王相（1296年—1361年），元人物。籍贯吉水州，入仕進士，曾任國子學博士、國子學助教、縣丞。（中国历代人物传记资料库 CBDB 100729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bUSu6ZpTQ9eba89jgnT6Nr | 潘氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：潘氏(王相妻)（CBDB 111536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=111536&o=json)
- [中国历代人物传记资料库：王相（CBDB 100729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100729&o=json)
