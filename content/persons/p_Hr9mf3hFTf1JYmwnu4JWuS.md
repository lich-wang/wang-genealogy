---
schema: wang-person/v1
id: p_Hr9mf3hFTf1JYmwnu4JWuS
status: active
merged_into: null
display_name: 卢惕
cbdb_id: 185864
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tlBxGCM1ne2hGZuiOpg3sD
        subject_person_id: p_Hr9mf3hFTf1JYmwnu4JWuS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 卢惕（卒於810），唐人物。曾任殿中侍御史。（中国历代人物传记资料库 CBDB 185864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3rh37QdnATrFPwbkaSeu_
          claim_id: c_tlBxGCM1ne2hGZuiOpg3sD
          source_id: s_fWvvFL1XPY9XPGfj5zKbLi
          stance: supports
          locator: CBDB:185864
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fWvvFL1XPY9XPGfj5zKbLi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：盧惕（185864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185864&o=json
            external_identifier: CBDB:185864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gd35FbUGyeDvBZ1bsLr9NZ
        subject_person_id: p_Hr9mf3hFTf1JYmwnu4JWuS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 卢惕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SFfVo8Bee1Tn6yoem6ypEi
          claim_id: c_gd35FbUGyeDvBZ1bsLr9NZ
          source_id: s_VuBmUMHDjHucVSdUXoEuU3
          stance: supports
          locator: Q45655083
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_VuBmUMHDjHucVSdUXoEuU3
            source_type: api_record
            title: 维基数据：卢惕（Q45655083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45655083
            external_identifier: Q45655083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_GCspL5HnJ86ZFVLriXna8G
          claim_id: c_gd35FbUGyeDvBZ1bsLr9NZ
          source_id: s_fWvvFL1XPY9XPGfj5zKbLi
          stance: supports
          locator: CBDB:185864
          quotation: null
          interpretation_note: 导入亲属人物姓名
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
        id: c_mjVwM62vKQL4EV4coNDENn
        subject_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Hr9mf3hFTf1JYmwnu4JWuS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MiDpoFW72kWybiipKpv3Sy
          claim_id: c_mjVwM62vKQL4EV4coNDENn
          source_id: s_PTsQuwWX6iChr4rf66ZztN
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_PTsQuwWX6iChr4rf66ZztN
            source_type: api_record
            title: 维基数据：王氏（Q65803780）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803780
            external_identifier: Q65803780
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:04.029Z
            metadata_json: null
        - id: cs_G2rqt2q12C68xVQPXU9XJA
          claim_id: c_mjVwM62vKQL4EV4coNDENn
          source_id: s_VuBmUMHDjHucVSdUXoEuU3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_WNGQavioC2dVddiuzi6VEZ
          claim_id: c_mjVwM62vKQL4EV4coNDENn
          source_id: s_3f8UP9pJr7FH9cdZ6rSzrZ
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_3f8UP9pJr7FH9cdZ6rSzrZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（145252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145252&o=json
            external_identifier: CBDB:145252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:04.187Z
            metadata_json: null
      object_person:
        id: p_FkG1TtDRuH3sDgFUz4V9Z7
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_yKDJmenef2mHJ8JqeohBhR
        subject_person_id: p_Hr9mf3hFTf1JYmwnu4JWuS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FkG1TtDRuH3sDgFUz4V9Z7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vJ7cRz0tA0axOl7DLuHK18
          claim_id: c_yKDJmenef2mHJ8JqeohBhR
          source_id: s_fWvvFL1XPY9XPGfj5zKbLi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FkG1TtDRuH3sDgFUz4V9Z7
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 卢惕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 卢惕（卒於810），唐人物。曾任殿中侍御史。（中国历代人物传记资料库 CBDB 185864） | accepted |
| name.primary | 卢惕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FkG1TtDRuH3sDgFUz4V9Z7 | 王氏 | accepted |
| spouses | p_FkG1TtDRuH3sDgFUz4V9Z7 | 王氏 | accepted |

## 外部来源

- [维基数据：卢惕（Q45655083）](https://www.wikidata.org/wiki/Q45655083)
- [维基数据：王氏（Q65803780）](https://www.wikidata.org/wiki/Q65803780)
- [CBDB 中国历代人物传记资料库：盧惕（185864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185864&o=json)
- [CBDB 中国历代人物传记资料库：王氏（145252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145252&o=json)
