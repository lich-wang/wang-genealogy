---
schema: wang-person/v1
id: p_iFt5uE8u9k4BSBnyeCjeA7
status: active
merged_into: null
display_name: 王建侯
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nLXR2wGEBPybFMm97xKt2i
        subject_person_id: p_iFt5uE8u9k4BSBnyeCjeA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建侯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6V2sgGh745fLUhHAARH2oH
          claim_id: c_nLXR2wGEBPybFMm97xKt2i
          source_id: s_Nz3HN2oDG621PB5JZTLGuB
          stance: supports
          locator: CBDB:161300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（161300）
          source: &a1
            id: s_Nz3HN2oDG621PB5JZTLGuB
            source_type: api_record
            title: 中国历代人物传记资料库：王建侯（CBDB 161300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161300&o=json
            external_identifier: CBDB:161300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HBkMoFPWGQeSmiLKc48iFE
        subject_person_id: p_iFt5uE8u9k4BSBnyeCjeA7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建侯，唐人物。籍贯汝州，曾任州刺史。（中国历代人物传记资料库 CBDB 161300）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u_PX6Coi9JlzDS4FNMaM-v
          claim_id: c_HBkMoFPWGQeSmiLKc48iFE
          source_id: s_Nz3HN2oDG621PB5JZTLGuB
          stance: supports
          locator: CBDB:161300
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_H-Jj5gDPsY68fsMLPkyl0Z
        subject_person_id: p_9QhSck2AYshf4nqhc8rPWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iFt5uE8u9k4BSBnyeCjeA7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GN7RCjxksFcxYmDQf419Ia
          claim_id: c_H-Jj5gDPsY68fsMLPkyl0Z
          source_id: s_Nz3HN2oDG621PB5JZTLGuB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9QhSck2AYshf4nqhc8rPWy
        status: active
        display_name: 王璦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王建侯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建侯 | accepted |
| bio.summary | 王建侯，唐人物。籍贯汝州，曾任州刺史。（中国历代人物传记资料库 CBDB 161300） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9QhSck2AYshf4nqhc8rPWy | 王璦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建侯（CBDB 161300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161300&o=json)
