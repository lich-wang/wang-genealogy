---
schema: wang-person/v1
id: p_GESQAGJzaDNT4HipsymGxE
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 250570
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_0k40_yBk2NQzhhhBa3045c
        subject_person_id: p_GESQAGJzaDNT4HipsymGxE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uoqV4HJuO76G7C3QxOwZoU
          claim_id: c_0k40_yBk2NQzhhhBa3045c
          source_id: s_5l6oTR_kx8Np1DGpkZc_OG
          stance: supports
          locator: CBDB:250570
          quotation: null
          interpretation_note: CBDB 明确记录的王儼配偶
          source: &a1
            id: s_5l6oTR_kx8Np1DGpkZc_OG
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王儼妻)（CBDB 250570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250570&o=json
            external_identifier: CBDB:250570
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
        id: c_c6zHqsLUTcbzVO8KtdkJNK
        subject_person_id: p_GGm15a95bmjM4yFUpB9QGR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GESQAGJzaDNT4HipsymGxE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDHDHubb4ZcrV4zz_EfaXr
          claim_id: c_c6zHqsLUTcbzVO8KtdkJNK
          source_id: s_5l6oTR_kx8Np1DGpkZc_OG
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百九十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GGm15a95bmjM4yFUpB9QGR
        status: active
        display_name: 王儼
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GGm15a95bmjM4yFUpB9QGR | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王儼妻)（CBDB 250570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250570&o=json)
