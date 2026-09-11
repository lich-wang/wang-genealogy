---
schema: wang-person/v1
id: p_6ofX88ZkzKjrRRiUU8kTEZ
status: active
merged_into: null
display_name: 馮氏
revision: 1
cbdb_id: 551504
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RL6U-cnaV7jo-JPJdp56Ju
        subject_person_id: p_6ofX88ZkzKjrRRiUU8kTEZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 馮氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtPwb-R5qC6rrAhFEJmhfP
          claim_id: c_RL6U-cnaV7jo-JPJdp56Ju
          source_id: s_DyKV-QDKzfIuTHY4K1nHf0
          stance: supports
          locator: CBDB:551504
          quotation: null
          interpretation_note: CBDB 明确记录的王沂若配偶
          source: &a1
            id: s_DyKV-QDKzfIuTHY4K1nHf0
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王沂若妻)（CBDB 551504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551504&o=json
            external_identifier: CBDB:551504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yDr1nGIx4c4owjkbdunaAc
        subject_person_id: p_BoQ3bxPTXeG24V1AJeLzEL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6ofX88ZkzKjrRRiUU8kTEZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kx0513duYq1Pk1N1ZHIIgn
          claim_id: c_yDr1nGIx4c4owjkbdunaAc
          source_id: s_DyKV-QDKzfIuTHY4K1nHf0
          stance: supports
          locator: 南陽府志，lgid=878671：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BoQ3bxPTXeG24V1AJeLzEL
        status: active
        display_name: 王沂若
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 馮氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 馮氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BoQ3bxPTXeG24V1AJeLzEL | 王沂若 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王沂若妻)（CBDB 551504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551504&o=json)
