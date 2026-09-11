---
schema: wang-person/v1
id: p_KTRKwGZTDUtCLsHg2UN1UQ
status: active
merged_into: null
display_name: 王濟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xtg8xm16qAoebx3vdfjJLA
        subject_person_id: p_KTRKwGZTDUtCLsHg2UN1UQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TBCpdrDoGcfEha7tiW8ijK
          claim_id: c_Xtg8xm16qAoebx3vdfjJLA
          source_id: s_865jquG6CMC31DLxX5Bfck
          stance: supports
          locator: CBDB:145203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145203）
          source: &a1
            id: s_865jquG6CMC31DLxX5Bfck
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 145203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145203&o=json
            external_identifier: CBDB:145203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_b3BE5SVB9anobs14N6ZFoi
        subject_person_id: p_KTRKwGZTDUtCLsHg2UN1UQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 773年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nBBmgxCCqgHKZkvvk7PNd4
          claim_id: c_b3BE5SVB9anobs14N6ZFoi
          source_id: s_865jquG6CMC31DLxX5Bfck
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
        id: c_PKNfTwDVMK8gDPDsAau9kg
        subject_person_id: p_KTRKwGZTDUtCLsHg2UN1UQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 836年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_77H4S1Wns3FCBXVGjAnhES
          claim_id: c_PKNfTwDVMK8gDPDsAau9kg
          source_id: s_865jquG6CMC31DLxX5Bfck
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
        id: c_xa8NMcLmF1Hbtnqc5XQQ9J
        subject_person_id: p_KTRKwGZTDUtCLsHg2UN1UQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DFBJzhzY9MDQz8beYxPMMq
          claim_id: c_xa8NMcLmF1Hbtnqc5XQQ9J
          source_id: s_865jquG6CMC31DLxX5Bfck
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
        id: c_f6pRaV-yfXCtWGoy2nc2aO
        subject_person_id: p_hpEQRWT5BuCAx5iC3W6giV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KTRKwGZTDUtCLsHg2UN1UQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1yV_ci_QkkGRKIRXRqZ99Z
          claim_id: c_f6pRaV-yfXCtWGoy2nc2aO
          source_id: s_865jquG6CMC31DLxX5Bfck
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hpEQRWT5BuCAx5iC3W6giV
        status: active
        display_name: 王陵
        merged_into_person_id: null
  children:
    - claim:
        id: c_Xd2p5AtrlmHZKdZcaa6yTS
        subject_person_id: p_KTRKwGZTDUtCLsHg2UN1UQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Hgmv7THVpCQKAF6SoQGEt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sTEYbXTVlvTkLVfb29mXeY
          claim_id: c_Xd2p5AtrlmHZKdZcaa6yTS
          source_id: s_865jquG6CMC31DLxX5Bfck
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7Hgmv7THVpCQKAF6SoQGEt
        status: active
        display_name: 王師積
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| birth.date | 773年 | accepted |
| death.date | 836年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hpEQRWT5BuCAx5iC3W6giV | 王陵 | accepted |
| children | p_7Hgmv7THVpCQKAF6SoQGEt | 王師積 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 145203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145203&o=json)
