---
schema: wang-person/v1
id: p_gGC23xhwQXL2gcAMcS3G3U
status: active
merged_into: null
display_name: 王序
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w8WhprqC6hAmKnH7UPSgyd
        subject_person_id: p_gGC23xhwQXL2gcAMcS3G3U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1iE6gFtnMFrbJbYUujvjAT
          claim_id: c_w8WhprqC6hAmKnH7UPSgyd
          source_id: s_F2ub4THmm62GUS1a2VdLK1
          stance: supports
          locator: CBDB:272389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272389）
          source: &a1
            id: s_F2ub4THmm62GUS1a2VdLK1
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 272389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272389&o=json
            external_identifier: CBDB:272389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zo8jDy6iMpa4Z9dLuFvB9H
        subject_person_id: p_gGC23xhwQXL2gcAMcS3G3U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序，明人物。弘治十五年進士，籍贯金谿，曾任刑科給事中、學正、學正事。（中国历代人物传记资料库 CBDB 272389）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AxZe6NBdqd3n8ZZprqOH1m
          claim_id: c_zo8jDy6iMpa4Z9dLuFvB9H
          source_id: s_F2ub4THmm62GUS1a2VdLK1
          stance: supports
          locator: CBDB:272389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4Xa_sdQ2-wj0ENjavgUOIu
        subject_person_id: p_gGC23xhwQXL2gcAMcS3G3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5CWBF7uCCTFxLBu21txfC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DuEnPR11xJ-9uNXhT11ZNt
          claim_id: c_4Xa_sdQ2-wj0ENjavgUOIu
          source_id: s_F2ub4THmm62GUS1a2VdLK1
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百七十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G5CWBF7uCCTFxLBu21txfC
        status: active
        display_name: 王萱
        merged_into_person_id: null
    - claim:
        id: c_i_aye2zmhCx68S--3Wnp0n
        subject_person_id: p_gGC23xhwQXL2gcAMcS3G3U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aEsLhzJM2J5736Dvki9e9Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dyTZWBNUQoc4gryQu2qUMx
          claim_id: c_i_aye2zmhCx68S--3Wnp0n
          source_id: s_F2ub4THmm62GUS1a2VdLK1
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第九十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aEsLhzJM2J5736Dvki9e9Z
        status: active
        display_name: 王蓂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王序

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王序 | accepted |
| bio.summary | 王序，明人物。弘治十五年進士，籍贯金谿，曾任刑科給事中、學正、學正事。（中国历代人物传记资料库 CBDB 272389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_G5CWBF7uCCTFxLBu21txfC | 王萱 | accepted |
| children | p_aEsLhzJM2J5736Dvki9e9Z | 王蓂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王序（CBDB 272389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272389&o=json)
