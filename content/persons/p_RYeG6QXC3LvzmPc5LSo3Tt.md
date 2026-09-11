---
schema: wang-person/v1
id: p_RYeG6QXC3LvzmPc5LSo3Tt
status: active
merged_into: null
display_name: 王澍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWs5vZGC6NmLiHhSRngq4E
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kBLsNr56Tc97XcoELpP7Jy
          claim_id: c_KWs5vZGC6NmLiHhSRngq4E
          source_id: s_4oPXT5i77e8Jgr9bqR3YfP
          stance: supports
          locator: CBDB:219569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219569）
          source: &a1
            id: s_4oPXT5i77e8Jgr9bqR3YfP
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 219569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219569&o=json
            external_identifier: CBDB:219569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkLsmt78W9jQWHcqZF47Xn
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219569）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mv_VjoPygWkMIwJVy3gMfM
          claim_id: c_EkLsmt78W9jQWHcqZF47Xn
          source_id: s_4oPXT5i77e8Jgr9bqR3YfP
          stance: supports
          locator: CBDB:219569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_G1qtdfhXiC6hcvi1ipdyxl
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfn6RTjudN38mHGMoyvEdk
          claim_id: c_G1qtdfhXiC6hcvi1ipdyxl
          source_id: s_4oPXT5i77e8Jgr9bqR3YfP
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zZbuHXnqm4wRFTtwvCX7hA
        status: active
        display_name: 王道增
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | 王澍，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_zZbuHXnqm4wRFTtwvCX7hA | 王道增 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 219569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219569&o=json)
