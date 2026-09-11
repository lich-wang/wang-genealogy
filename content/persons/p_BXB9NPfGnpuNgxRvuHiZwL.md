---
schema: wang-person/v1
id: p_BXB9NPfGnpuNgxRvuHiZwL
status: active
merged_into: null
display_name: 王恭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NdQDvpS39Tp3VzBf7C2DRH
        subject_person_id: p_BXB9NPfGnpuNgxRvuHiZwL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ycDHyK6fqy84CzYQkXJ97a
          claim_id: c_NdQDvpS39Tp3VzBf7C2DRH
          source_id: s_BdxAAm2fQh3fdnwssa1T3v
          stance: supports
          locator: CBDB:142430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142430）
          source: &a1
            id: s_BdxAAm2fQh3fdnwssa1T3v
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 142430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142430&o=json
            external_identifier: CBDB:142430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sqToD6HVMFVRbuvNkzwgfE
        subject_person_id: p_BXB9NPfGnpuNgxRvuHiZwL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZJ4cTYKXbZBH96puWV9HJv
          claim_id: c_sqToD6HVMFVRbuvNkzwgfE
          source_id: s_BdxAAm2fQh3fdnwssa1T3v
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
        id: c_K4BSpegAjbrKuLQ5HmsfYT
        subject_person_id: p_BXB9NPfGnpuNgxRvuHiZwL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 617年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXfBw59KAo2TkxowJ3M2At
          claim_id: c_K4BSpegAjbrKuLQ5HmsfYT
          source_id: s_BdxAAm2fQh3fdnwssa1T3v
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
        id: c_Gp919nHjHDEyDPiBMioP3Y
        subject_person_id: p_BXB9NPfGnpuNgxRvuHiZwL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为隋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D93Ndx5JFfov21QESXYxqb
          claim_id: c_Gp919nHjHDEyDPiBMioP3Y
          source_id: s_BdxAAm2fQh3fdnwssa1T3v
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
        id: c_AzmLwNiv-0Gpka73x1YVMV
        subject_person_id: p_Xa6Y2Lc85FtAk1pdXcvXpd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BXB9NPfGnpuNgxRvuHiZwL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ey2HXIpH8cjc1xYMU9dcfM
          claim_id: c_AzmLwNiv-0Gpka73x1YVMV
          source_id: s_BdxAAm2fQh3fdnwssa1T3v
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui25：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Xa6Y2Lc85FtAk1pdXcvXpd
        status: active
        display_name: 王那仁
        merged_into_person_id: null
  children:
    - claim:
        id: c_YEHyUqA3CdUNS9FA464tHD
        subject_person_id: p_BXB9NPfGnpuNgxRvuHiZwL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DNGJa9ezkKqyvBdn8a361a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LlqqwPUXJ6y5azCGqhMVW
          claim_id: c_YEHyUqA3CdUNS9FA464tHD
          source_id: s_BdxAAm2fQh3fdnwssa1T3v
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yonghui25：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DNGJa9ezkKqyvBdn8a361a
        status: active
        display_name: 王武保
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| birth.date | 536年 | accepted |
| death.date | 617年 | accepted |
| bio.summary | CBDB 记载为隋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xa6Y2Lc85FtAk1pdXcvXpd | 王那仁 | accepted |
| children | p_DNGJa9ezkKqyvBdn8a361a | 王武保 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 142430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142430&o=json)
