---
schema: wang-person/v1
id: p_q65LjSR3e6s3Y3D1bpqPNS
status: active
merged_into: null
display_name: 王崇義
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wkbQLE2rHbEiwvRddtPtpM
        subject_person_id: p_q65LjSR3e6s3Y3D1bpqPNS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G4qi6EKuB4ZPPZ18soCzdJ
          claim_id: c_wkbQLE2rHbEiwvRddtPtpM
          source_id: s_GL2Zn3PRqvm9BMvs1KCqpm
          stance: supports
          locator: CBDB:203246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203246）
          source: &a1
            id: s_GL2Zn3PRqvm9BMvs1KCqpm
            source_type: api_record
            title: 中国历代人物传记资料库：王崇義（CBDB 203246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203246&o=json
            external_identifier: CBDB:203246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7BpQ5jUjBk9CwMi5WBKt2H
        subject_person_id: p_q65LjSR3e6s3Y3D1bpqPNS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1509年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ejPdhM13cBMy6C35VXVpeH
          claim_id: c_7BpQ5jUjBk9CwMi5WBKt2H
          source_id: s_GL2Zn3PRqvm9BMvs1KCqpm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BLEDJnyaULi6aG6uFinA2Z
        subject_person_id: p_q65LjSR3e6s3Y3D1bpqPNS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇義（生于1509年），明人物。嘉靖十七年進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 203246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zFL6I3devW0pIyeRSldTuc
          claim_id: c_BLEDJnyaULi6aG6uFinA2Z
          source_id: s_GL2Zn3PRqvm9BMvs1KCqpm
          stance: supports
          locator: CBDB:203246
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
  ancestors:
    - claim:
        id: c_yftC2SwqY3OTd1_JhFGZFU
        subject_person_id: p_6rmKu2tnL9PKGQ8F3tuNWr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q65LjSR3e6s3Y3D1bpqPNS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPwYn3svBF5ArNmlIFKTJq
          claim_id: c_yftC2SwqY3OTd1_JhFGZFU
          source_id: s_A7xexE5aVh379G43ECbPjB
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A7xexE5aVh379G43ECbPjB
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 301917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301917&o=json
            external_identifier: CBDB:301917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6rmKu2tnL9PKGQ8F3tuNWr
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_gmTwIwew3l7_ifwQ0MnTeM
        subject_person_id: p_mxdoBPHFTbHqvX3R6mggi8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q65LjSR3e6s3Y3D1bpqPNS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7OR8c10KMuvoxSLMLuxNJm
          claim_id: c_gmTwIwew3l7_ifwQ0MnTeM
          source_id: s_d3SKBMyE34nzN1BK1m8CJH
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d3SKBMyE34nzN1BK1m8CJH
            source_type: api_record
            title: 中国历代人物传记资料库：王振（CBDB 301918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301918&o=json
            external_identifier: CBDB:301918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mxdoBPHFTbHqvX3R6mggi8
        status: active
        display_name: 王振
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇義 | accepted |
| birth.date | 1509年 | accepted |
| bio.summary | 王崇義（生于1509年），明人物。嘉靖十七年進士，籍贯淄川，入仕進士。（中国历代人物传记资料库 CBDB 203246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6rmKu2tnL9PKGQ8F3tuNWr | 王俊 | accepted |
| ancestors | p_mxdoBPHFTbHqvX3R6mggi8 | 王振 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇義（CBDB 203246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203246&o=json)
- [中国历代人物传记资料库：王俊（CBDB 301917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301917&o=json)
- [中国历代人物传记资料库：王振（CBDB 301918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301918&o=json)
