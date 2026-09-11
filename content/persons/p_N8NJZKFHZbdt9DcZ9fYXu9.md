---
schema: wang-person/v1
id: p_N8NJZKFHZbdt9DcZ9fYXu9
status: active
merged_into: null
display_name: 張氏
revision: 1
cbdb_id: 513040
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_27LsuuCufaCjC5_qSzkd_X
        subject_person_id: p_N8NJZKFHZbdt9DcZ9fYXu9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_phnSG2S-kql8fPcKJzGRVX
          claim_id: c_27LsuuCufaCjC5_qSzkd_X
          source_id: s_Vea62drjHBVBjxid5VwjNZ
          stance: supports
          locator: CBDB:513040
          quotation: null
          interpretation_note: CBDB 明确记录的王有配偶
          source: &a1
            id: s_Vea62drjHBVBjxid5VwjNZ
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王有妻)（CBDB 513040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513040&o=json
            external_identifier: CBDB:513040
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
        id: c_4giTY6inLmBbJNWR9pVY9C
        subject_person_id: p_gf1SAS5ZWfjPMuxuA2EovU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_N8NJZKFHZbdt9DcZ9fYXu9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b0j9jDN3xiTrmPTL9mAIkn
          claim_id: c_4giTY6inLmBbJNWR9pVY9C
          source_id: s_Vea62drjHBVBjxid5VwjNZ
          stance: supports
          locator: (道光)敦煌縣志，lgid=1104935：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gf1SAS5ZWfjPMuxuA2EovU
        status: active
        display_name: 王有
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gf1SAS5ZWfjPMuxuA2EovU | 王有 | accepted |

## 外部来源

- [中国历代人物传记资料库：張氏(王有妻)（CBDB 513040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513040&o=json)
